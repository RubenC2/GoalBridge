const { JobOffer, createOrUpdateOffer } = require('../models/job.offer.model');

// CREATE
const createOffer = async (req, res) => {
    console.log(req.body);

    try {
        const data = req.body;
        let answer = await createOrUpdateOffer(data);
        res.status(201).json(answer);
    } catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({ msj: `ERROR: ${error.stack}` });
    }
};
const scrapOffers = async (req, res) => {
    try {
        const keyword = req.query.keyword || '';
        console.log('Search keyword:', keyword);

        const jobOffers = keyword
            ? await JobOffer.find({
                $or: [
                    { puesto: { $regex: keyword, $options: 'i' } },
                    { empresa: { $regex: keyword, $options: 'i' } },
                    { descripcion: { $regex: keyword, $options: 'i' } },
                    { modalidad: { $regex: keyword, $options: 'i' } },
                    { requisitos: { $regex: keyword, $options: 'i' } },
                    { salario: { $regex: keyword, $options: 'i' } },
                    { link: { $regex: keyword, $options: 'i' } }
                ],
            }).limit(100)
            : [];

        // Truncate long text fields and handle duplicate content
        const processedJobOffers = jobOffers.map(offer => {
            const offerObj = offer.toObject();
            
            // Truncate descripcion
            offerObj.descripcion = offerObj.descripcion.length > 150 
                ? offerObj.descripcion.substring(0, 147) + '...' 
                : offerObj.descripcion;
            
            // Truncate requisitos
            offerObj.requisitos = offerObj.requisitos.length > 150 
                ? offerObj.requisitos.substring(0, 147) + '...' 
                : offerObj.requisitos;
            
            // Check if descripcion and requisitos are identical
            if (offerObj.descripcion === offerObj.requisitos) {
                offerObj.requisitos = 'No se proporcionaron requisitos específicos.';
            }
            
            return offerObj;
        });

        console.log('Found job offers:', processedJobOffers.length);
        res.render('jobOffers', { jobOffers: processedJobOffers, keyword });
    } catch (error) {
        console.error('Error al buscar ofertas de trabajo:', error);
        res.status(500).render('error', { message: 'Error al buscar ofertas de trabajo' });
    }
};

// READ
const getOffers = async (req, res) => {
    try {
        const keyword = req.query.keyword || '';

        // Ensure only to proceed if a keyword is provided
        const jobOffers = keyword
            ? await jobOfferModel.find({
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
};

// UPDATE
const editOffer = async (req, res) => {
    try {
        const ofertaActualizada = await JobOffer.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (ofertaActualizada) {
            res.status(200).json({
                message: "Oferta actualizada",
                offer: ofertaActualizada
            });
        } else {
            res.status(404).json({ mensaje: 'Oferta no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

// DELETE
const deleteOffer = async (req, res) => {
    try {
        const oferta = await JobOffer.findByIdAndDelete(req.params.id);
        if (oferta) {
            res.json({ message: `Se ha borrado la oferta: ${oferta.puesto}` });
        } else {
            res.status(404).json({ mensaje: 'Oferta no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

module.exports = {
    createOffer,
    getOffers,
    editOffer,
    deleteOffer,
    scrapOffers
};