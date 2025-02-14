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

router.post('/:id/edit', jobOfferController.editOffer);

router.post('/:id/delete', jobOfferController.deleteOffer);

module.exports = router;