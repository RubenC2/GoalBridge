const mongoose = require("mongoose");
require("../config/db.mongo"); // Conexión a BBDD MongoDB

const jobOfferSchema = new mongoose.Schema({
    puesto: {
        type: String,
        required: true,
        trim: true
    },
    empresa: {
        type: String,
        required: true,
        trim: true
    },
    salario: {
        type: String,
        required: true,
        trim: true
    },
    descripcion: {
        type: String,
        required: true,
        trim: true
    },
    modalidad: {
        type: String,
        required: true,
        trim: true
    },
    requisitos: {
        type: String,
        required: true,
        trim: true
    },
    link: {
        type: String,
        required: false,
        unique: true,
        sparse: true,
        trim: true
    }
}, { timestamps: true });

jobOfferSchema.index({ puesto: 1, empresa: 1 }, { unique: true });

const JobOffer = mongoose.model("Offer", jobOfferSchema, "offers");


module.exports = {
    JobOffer,
    // createOrUpdateOffer
};