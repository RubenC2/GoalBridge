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

// Create a compound index for uniqueness
jobOfferSchema.index({ puesto: 1, empresa: 1 }, { unique: true });

// Create the model
const JobOffer = mongoose.model("Offer", jobOfferSchema, "offers");

// // Helper function to handle job offer insertions or updates
async function createOrUpdateOffer(offerData) {
    try {
        // If link is empty string, set it to null
        if (offerData.link === "") {
            offerData.link = null;
        }

        // Try to find an existing offer with the same position and company
        const existingOffer = await JobOffer.findOne({
            puesto: offerData.puesto,
            empresa: offerData.empresa
        });

        if (existingOffer) {
            // Update the existing offer
            Object.assign(existingOffer, offerData);
            await existingOffer.save();
            console.log(`Updated existing offer: ${offerData.puesto} at ${offerData.empresa}`);
            return existingOffer;
        } else {
            // Create a new offer
            const newOffer = new JobOffer(offerData);
            await newOffer.save();
            console.log(`Created new offer: ${offerData.puesto} at ${offerData.empresa}`);
            return newOffer;
        }
    } catch (error) {
        console.error(`Error creating/updating offer: ${error.message}`);
        throw error;
    }
}

module.exports = {
    JobOffer,
    createOrUpdateOffer
};