const Product = require('../models/jobOffer.model');  // Importación del modelo Product
const productService = require('../services/jobOffer.service');

// CREATE
const createProduct = async (req, res) => {
    console.log(req.body);

    try {
        const data = req.body;
        let answer = await new Product(data).save();  // Guarda un nuevo producto
        res.status(201).json(answer);
    } catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({ msj: `ERROR: ${error.stack}` });
    }
};

// READ
const getProduct = async (req, res) => {
    try {
        const id = req.params.id;
        let products = id
            ? await Product.findById(id, '-_id -__v').populate("provider", '-_id -__v')  // Si se especifica un ID, busca por ID
            : await Product.find({}, '-_id -__v').populate("provider", '-_id -__v');     // Si no, encuentra todos los productos
        res.status(200).json(products);
    } catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({ msj: `ERROR: ${error.stack}` });
    }
};

// UPDATE
const editProduct = async (req, res) => {
    try {
        const productoActualizado = await productService.actualizarProducto(req.params.id, req.body);
        if (productoActualizado) {
            res.status(201).json({
                message: "Producto actualizado",
                product: productoActualizado
            });
        } else {
            res.status(404).json({ mensaje: 'Producto no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

// DELETE
const deleteProduct = async (req, res) => {
    try {
        const product = await productService.eliminarProducto(req.params.id);
        if (product) {
            res.json({ message: `Se ha borrado el producto: ${product}` });
        } else {
            res.status(404).json({ mensaje: 'Producto no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

module.exports = {
    createProduct,
    getProduct,
    editProduct,
    deleteProduct
};
