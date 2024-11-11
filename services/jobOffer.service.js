const User = require('../models/jobOffer.model');

const obtenerTodosLosProductos = async () => {
    return await User.find();
};

const obtenerProductoPorId = async (id) => {
    return await User.findById(id);
};

const crearProducto = async (datosUsuario) => {
    const user = new User(datosUsuario);
    return await user.save();
};

const actualizarProducto = async (id, datosUsuario) => {
    return await User.findByIdAndUpdate(id, datosUsuario, { new: true });
};

const eliminarProducto = async (id) => {
    return await User.findByIdAndDelete(id);
};

module.exports = {
    obtenerTodosLosProductos,
    obtenerProductoPorId,
    crearProducto,
    actualizarProducto,
    eliminarProducto
};