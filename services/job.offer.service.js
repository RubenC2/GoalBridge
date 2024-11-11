const jobOffers = require('../models/job.offer.model');

const obtenerTodosLasOfertas = async () => {
    return await jobOffers.find();
};

const obtenerOfertaPorId = async (id) => {
    return await jobOffers.findById(id);
};

const crearOferta = async (datosUsuario) => {
    const jobOffers = new User(datosUsuario);
    return await jobOffers.save();
};

const actualizarOferta = async (id, datosUsuario) => {
    return await jobOffers.findByIdAndUpdate(id, datosUsuario, { new: true });
};

const eliminarOferta = async (id) => {
    return await jobOffers.findByIdAndDelete(id);
};

module.exports = {
    obtenerTodosLasOfertas,
    obtenerOfertaPorId,
    crearOferta,
    actualizarOferta,
    eliminarOferta
};