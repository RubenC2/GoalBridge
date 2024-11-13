const express = require('express');
const router = express.Router();
const jobOfferController = require('../controllers/job.offer.controller');
const { JobOffer } = require('../models/job.offer.model');

// Create a new job offer
router.post("/", jobOfferController.createOffer);

// Search for job offers
router.get('/', jobOfferController.scrapOffers);

// Get a specific job offer by ID
router.get('/:id', jobOfferController.getOffer);

// Update a specific job offer
router.put('/:id', jobOfferController.editOffer);

// Delete a specific job offer
router.delete('/:id', jobOfferController.deleteOffer);

module.exports = router;