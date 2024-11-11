const User = require('../models/users.model');

const obtenerTodosLosUsuarios = async () => {
    return await User.find();
};

const obtenerUsuarioPorEmail = async (email) => {
    return await User.findById(email);
};

const crearUsuario = async (datosUsuario) => {
    const user = new User(datosUsuario);
    return await user.save();
};

const actualizarUsuario = async (email, datosUsuario) => {
    return await User.findByEmailAndUpdate(email, datosUsuario, { new: true });
};

const eliminarUsuario = async (id) => {
    return await User.findByIdAndDelete(id);
};

module.exports = {
    obtenerTodosLosUsuarios,
    obtenerUsuarioPorEmail,
    crearUsuario,
    actualizarUsuario,
    eliminarUsuario
};