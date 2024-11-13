const jobOfferController = require('../controllers/job.offer.controller');
const router = require('express').Router();
const JobOffer = require('../models/job.offer.model');


router.get('/', jobOfferController.getOffers);
router.post("/", jobOfferController.createOffer);


module.exports = router;
