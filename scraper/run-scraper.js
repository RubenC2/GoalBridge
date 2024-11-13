require('dotenv').config();
const { scrapeIndeed } = require('./indeed-scraper');
require('../config/db.mongo');

//Para correr el scraper => node scraper/run-scraper.js


const jobTitles = ['desarrollador web', 'programador', 'frontend developer', 'backend developer', 'full stack developer'];
scrapeIndeed(jobTitles, 'España')
  .then(() => {
    console.log('Scraping complete. Jobs have been saved to MongoDB.');
    process.exit(0);
  })
  .catch(error => {
    console.error('Scraping failed:', error);
    process.exit(1);
  });

console.log('Script execution started. Please wait for the results...');