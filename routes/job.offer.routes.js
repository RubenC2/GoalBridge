const jobOfferController = require('../controllers/job.offer.controller');
const router = require('express').Router();
const JobOffer = require('../models/job.offer.model');

router.post("/", jobOfferController.createOffer);

router.get('/buscar', async (req, res) => {
    try {
        const keyword = req.query.keyword || '';

        // Ensure only to proceed if a keyword is provided
        const jobOffers = keyword
            ? await JobOffer.find({
                $or: [
                    { puesto:  { $regex: `.*${keyword}.*`, $options: 'i' } },
                    { empresa: { $regex: `.*${keyword}.*`, $options: 'i' }},
                    { descripcion: { $regex: `.*${keyword}.*`, $options: 'i' }},
                    { modalidad:  { $regex: `.*${keyword}.*`, $options: 'i' } },
                    { requisitos: { $regex: `.*${keyword}.*`, $options: 'i' }},
                    { salario: { $regex: `.*${keyword}.*`, $options: 'i' }}
                ],
            })
            : []; // Return empty array if no keyword is provided

            res.render('jobOffers', { jobOffers });
    } catch (error) {
        res.status(500).json({ error: 'Error al buscar ofertas de trabajo' });
    }
});

module.exports = router;












// const jobOfferController = require('../controllers/job.offer.controller');
// const router = require('express').Router();
// const JobOffer = require('../models/job.offer.model');

// //router.get("/", jofOfferController.getOffer);
// router.post("/", jobOfferController.createOffer);
// router.get('/buscar', async (req, res) => {
//     try {
//       const keyword = req.query.keyword || '';
//       const jobOffers = await JobOffer.find({
//         $or: [
//           { puesto: new RegExp(keyword, 'i') },
//           { empresa: new RegExp(keyword, 'i') },
//           { descripcion: new RegExp(keyword, 'i') },
//         ],
//       });
//       res.render('jobOffers', { jobOffers });
//     } catch (error) {
//       res.status(500).json({ error: 'Error al buscar ofertas de trabajo' });
//     }
//   });

// module.exports = router;