const jofOfferController = require('../controllers/job.offer.controller');
const router = require('express').Router();

router.get('/get-offers', async (req, res) => {
    try {
      // Obtener las ofertas desde la base de datos
      const offers = await getAllOffers();
      // Devolver las ofertas como respuesta en formato JSON
      res.json(offers);
    } catch (error) {
      // Imprimir el error en la consola para depuración
      console.error('Error al obtener ofertas:', error);
      res.status(500).json({ message: 'Error al obtener las ofertas' });
    }
  });
  
router.post("/", jofOfferController.createOffer);

module.exports = router;