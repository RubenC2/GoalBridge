const express = require('express');
const router = express.Router();
const jobOfferController = require('../controllers/job.offer.controller');
const { JobOffer } = require('../models/job.offer.model');

router.post("/", jobOfferController.createOffer);
router.get("/", jobOfferController.scrapOffers);
router.get("/create", async (req, res) => {
  const jobOffers = await JobOffer.find();
  res.render('dashboard', { jobOffers });
});

// Update a specific job offer
router.post('/:id/edit', jobOfferController.editOffer);

// Delete a specific job offer
router.post('/:id/delete', jobOfferController.deleteOffer);

module.exports = router;