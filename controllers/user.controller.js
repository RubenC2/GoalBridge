const userModel = require('../models/users.model');  // Importación del modelo Product
const userService = require('../services/user.service');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// CREATE
const createUser = async (req, res) => {
    console.log(req.body);

    try {
        const data = req.body;
        let answer = await new userModel(data).save();  // Guarda un nuevo user
        res.status(201).json(answer);
    } catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({ msj: `ERROR: ${error.stack}` });
    }
};

// READ
const getUsers = async (req, res) => {
    let users; 
    if (req.query.email) {
        users = await userModel.getUsersByEmail(req.query.email);
    }
    else {
        users = await userModel.getAllUsers();
    }
    res.status(200).json(users); // [] con las entries encontradas
}

// UPDATE
const editUser = async (req, res) => {
    try {
        const userUpdate = await userService.actualizarUsuario(req.params.email, req.body);
        if (userUpdate) {
            res.status(201).json({
                message: "Usuario actualizado",
                product: userUpdate
            });
        } else {
            res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

// DELETE
const deleteUser = async (req, res) => {
    try {
        const user = await userService.eliminarUsuario(req.params.email);
        if (user) {
            res.json({ message: `Se ha borrado el usuario: ${user}` });
        } else {
            res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

module.exports = {
    createUser,
    getUsers,
    editUser,
    deleteUser
};

