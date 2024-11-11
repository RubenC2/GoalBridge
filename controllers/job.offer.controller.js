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
const getOffer = async (req, res) => {
    try {
        const id = req.params.id;
        let ofertas = id
            ? await jobOfferModel.findById(id, '-_id -__v').populate("provider", '-_id -__v')  // Si se especifica un ID, busca por ID
            : await jobOfferModel.find({}, '-_id -__v').populate("provider", '-_id -__v');     // Si no, encuentra todos los productos
        res.status(200).json(ofertas);
    } catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({ msj: `ERROR: ${error.stack}` });
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
    getOffer,
    editOffer,
    deleteOffer
};

