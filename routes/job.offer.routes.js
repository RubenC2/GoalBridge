const jobOfferController = require('../controllers/job.offer.controller');
const router = require('express').Router();
const JobOffer = require('../models/job.offer.model');

//router.get("/", jofOfferController.getOffer);
router.post("/", jobOfferController.createOffer);
router.get('/buscar', async (req, res) => {
    try {
      const keyword = req.query.keyword || '';
      const jobOffers = await JobOffer.find({
        $or: [
          { puesto: new RegExp(keyword, 'i') },
          { empresa: new RegExp(keyword, 'i') },
          { descripcion: new RegExp(keyword, 'i') },
        ],
      });
      res.json(jobOffers);
    } catch (error) {
      res.status(500).json({ error: 'Error al buscar ofertas de trabajo' });
    }
  });

module.exports = router;