const jofOfferController = require('../controllers/job.offer.controller');
const router = require('express').Router();

router.get("/", jofOfferController.getOffer);
router.post("/", jofOfferController.createOffer);

module.exports = router;