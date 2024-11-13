const jobOfferModel = require('../models/job.offer.model');  // Importación del modelo Product
const jobOfferService = require('../services/job.offer.service');

// CREATE
const createOffer = async (req, res) => {
    console.log(req.body);

    try {
        const data = req.body;
        let answer = await new jobOfferModel(data).save();  // Guarda un nuevo producto
        res.status(201).json(answer);
    } catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({ msj: `ERROR: ${error.stack}` });
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
        const ofertaActualizada = await jobOfferService.actualizarOferta(req.params.id, req.body);
        if (ofertaActualizada) {
            res.status(201).json({
                message: "Producto actualizado",
                product: ofertaActualizada
            });
        } else {
            res.status(404).json({ mensaje: 'Producto no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

// DELETE
const deleteOffer = async (req, res) => {
    try {
        const oferta = await jobOfferService.eliminarOferta(req.params.id);
        if (oferta) {
            res.json({ message: `Se ha borrado la oferta: ${oferta}` });
        } else {
            res.status(404).json({ mensaje: 'oferta no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

module.exports = {
    createOffer,
    getOffers,
    editOffer,
    deleteOffer
};

