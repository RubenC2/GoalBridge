const mongoose = require("mongoose");
require("../config/db.mongo"); // Conexión a BBDD MongoDB

const objectSchema = {
    food: {
        type: String,
        required: true,
        unique: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    provider: {
        type: String,
        required: true,
    },
};
// Crear el esquema
const productSchema = mongoose.Schema(objectSchema);

// Crear el modelo --> Colección
const Product = mongoose.model("Products", productSchema);

module.exports = Product;