const jobOfferController = require('../controllers/job.offer.controller');
const router = require('express').Router();
const JobOffer = require('../models/job.offer.model');


router.get('/', jobOfferController.getOffers);
router.post("/", jobOfferController.createOffer);
router.get("/create", (req, res) => res.render('dashboard'));

//

module.exports = router;
