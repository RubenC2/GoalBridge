const userModel = require('../models/users.model');  // Importación del modelo Product
const userService = require('../services/user.service');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


    
// GET http://localhost:3000/user?email=hola@gmail.com --> por email
const getUsers = async (req, res) => {
    let users;
    
    try {
        if (req.query.email) {
            // Si se proporciona un email, obtenemos un único usuario
            users = await userModel.getUserByEmail(req.query.email);
        } else {
            // Si no se proporciona un email, obtenemos todos los usuarios
            users = await userModel.getAllUsers();
        }
        
        // Pasamos los usuarios a la vista Pug
        res.render('dashboard', { usuarios: users });
    } catch (err) {
        // Si hay un error, podemos manejarlo adecuadamente
        res.status(500).send('Error al obtener los usuarios: ' + err);
    }
};


// CREAR
const createUser = async (req, res) => {
    const newUser = req.body; // {nombre,apellidos,email,password}
    const response = await userModel.createUser(newUser);
    res.status(201).json({
        "user_created": response,
        data: newUser
    });
}
//ACTUALIZAR
const updateUser = async (req, res) => {
    let user; 
    if (req.query.email) {
        user = await userModel.updateUser({message: `Se ha modificado el usuario ${email}`}
        );
    }
    else {
        user = await userModel.getAllUsers();
    }
    res.status(200).json(user); 
}
//BORRAR
const deleteUser = async (req, res) => {
    let user; 
    if (req.body.email) {
        console.log(req.query.email)
        user = await userModel.deleteUser({message: `Se ha borrado el usuario ${email}`});
    }
    else {
        user = await userModel.getAllUsers();
    }
    res.status(200).json(user); 
}

module.exports = {
    getUsers,
    createUser,
    deleteUser,
    updateUser 
}