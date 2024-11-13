const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const { executablePath } = require('puppeteer');
const jobOfferModel = require('../models/job.offer.model');

puppeteer.use(StealthPlugin());

function truncateDescription(description, maxWords = 250) {
  const words = description.split(/\s+/);
  if (words.length <= maxWords) return description;
  return words.slice(0, maxWords).join(' ') + '...';
}

async function scrapeIndeed(jobTitles, location, maxPages = 20) {
  const browser = await puppeteer.launch({ 
    headless: false,
    defaultViewport: null,
    executablePath: executablePath(),
    args: [
      '--start-maximized',
      '--disable-blink-features=AutomationControlled',
      '--disable-extensions',
      '--disable-component-extensions-with-background-pages',
      '--disable-background-timer-throttling',
      '--disable-backgrounding-occluded-windows',
      '--disable-renderer-backgrounding'
    ]
  });
  
  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
  
  await page.setExtraHTTPHeaders({
    'Accept-Language': 'es-ES,es;q=0.9,en;q=0.8',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
    'Sec-Fetch-Dest': 'document',
    'Sec-Fetch-Mode': 'navigate',
    'Sec-Fetch-Site': 'none',
    'Sec-Fetch-User': '?1',
    'Upgrade-Insecure-Requests': '1'
  });
  
  for (const jobTitle of jobTitles) {
    try {
      for (let currentPage = 0; currentPage < maxPages; currentPage++) {
        const url = `https://es.indeed.com/jobs?q=${encodeURIComponent(jobTitle)}&l=${encodeURIComponent(location)}${currentPage > 0 ? `&start=${currentPage * 10}` : ''}`;
        
        console.log(`Navigating to page ${currentPage + 1} for ${jobTitle}: ${url}`);
        await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });
        
        await page.waitForSelector('[class*="job_seen_beacon"], [class*="jobsearch-ResultsList"], #mosaic-provider-jobcards, #captcha-page', { timeout: 30000 });
        
        const isCaptchaPresent = await page.evaluate(() => {
          return !!document.querySelector('#captcha-page');
        });

        if (isCaptchaPresent) {
          console.log('CAPTCHA detected. Attempting to bypass...');
          await page.evaluate(() => {
            const events = ['mousemove', 'mousedown', 'mouseup', 'click'];
            events.forEach(eventType => {
              document.dispatchEvent(new MouseEvent(eventType, {
                view: window,
                bubbles: true,
                cancelable: true,
                clientX: Math.random() * window.innerWidth,
                clientY: Math.random() * window.innerHeight
              }));
            });
          });
          await page.waitForNavigation({ timeout: 30000 }).catch(() => {});
          console.log('Continuing after CAPTCHA bypass attempt...');
        }

        const jobs = await page.evaluate(() => {
          const jobCards = document.querySelectorAll('[class*="job_seen_beacon"], .job_seen_beacon');
          return Array.from(jobCards).map(card => {
            const puesto = card.querySelector('h2.jobTitle')?.innerText || 
                           card.querySelector('[class*="jobTitle"]')?.innerText || 
                           card.querySelector('a[id^="job_"]')?.innerText;
            const empresa = card.querySelector('[data-testid="company-name"], .companyName')?.innerText || 
                            card.querySelector('.company_location .companyName')?.innerText;
            const modalidad = card.querySelector('[data-testid="text-location"], .companyLocation')?.innerText || 
                              card.querySelector('.company_location .companyLocation')?.innerText;
            const salario = card.querySelector('[class*="salary-snippet"], .metadata.salary')?.innerText || 
                            card.querySelector('.salaryOnly')?.innerText || 'No especificado';
            const descripcion = card.querySelector('[class*="job-snippet"], .job-snippet')?.innerText || 
                                card.querySelector('.job-snippet-container')?.innerText;
            const link = card.querySelector('h2.jobTitle a')?.href || 
                         card.querySelector('a[id^="job_"]')?.href;
            
            return { puesto, empresa, salario, descripcion, modalidad, link };
          }).filter(job => job.puesto && job.empresa);
        });

        console.log(`Found ${jobs.length} jobs on page ${currentPage + 1} for ${jobTitle}`);
        
        for (const job of jobs) {
          if (job.link) {
            await page.goto(job.link, { waitUntil: 'networkidle0', timeout: 30000 });
            const fullDescription = await page.evaluate(() => {
              return document.querySelector('#jobDescriptionText')?.innerText || 
                     document.querySelector('.jobsearch-jobDescriptionText')?.innerText;
            });
            job.descripcion = truncateDescription(fullDescription || '', 250);
            job.requisitos = fullDescription || 'No especificado';
            console.log(`Fetched full description for: ${job.puesto}`);

            try {
              // Check if the job already exists
              const existingJob = await jobOfferModel.findOne({ link: job.link });
              if (existingJob) {
                // Update the existing job
                await jobOfferModel.findByIdAndUpdate(existingJob._id, job);
                console.log(`Updated existing job: ${job.puesto}`);
              } else {
                // Create a new job
                const newJob = new jobOfferModel(job);
                await newJob.save();
                console.log(`Saved new job: ${job.puesto}`);
              }
            } catch (error) {
              console.error(`Error saving/updating job: ${job.puesto}`, error);
            }

            await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));
          }
        }

        const hasNextButton = await page.evaluate(() => {
          const nextButton = document.querySelector('[data-testid="pagination-page-next"], .pagination-list > li:last-child > a');
          return nextButton && !nextButton.hasAttribute('disabled');
        });

        if (!hasNextButton) {
          console.log(`No next button found - reached last page for ${jobTitle}`);
          break;
        }

        await new Promise(resolve => setTimeout(resolve, 5000 + Math.random() * 5000));
      }
    } catch (error) {
      console.error(`An error occurred while scraping ${jobTitle}:`, error);
    }
  }

  await browser.close();
}

module.exports = { scrapeIndeed };