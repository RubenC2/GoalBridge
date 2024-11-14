const userModel = require('../models/users.model');  // Importación del modelo Product
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


    
// GET http://localhost:3000/user?email=hola@gmail.com --> por email
const getUsers = async (req, res) => {
    let users;
    
    try {
        if (req.query.email) {

            users = await userModel.getUserByEmail(req.query.email);
        } else {
            
            users = await userModel.getAllUsers();
        }
        
        
        res.render('dashboardProfile', { usuarios: users });
    } catch (err) {
        
        res.status(500).send('Error al obtener los usuarios: ' + err);
    }
};


// CREAR
const createUser = async (req, res) => {
    const newUser = req.body; // {nombre, apellidos, email, password}

    try {
        const response = await userModel.createUser(newUser);

        res.status(201).redirect('/user/profile');
    } catch (error) {
        console.error("Error al crear el usuario:", error);

        res.status(400).json({ success: false, message: "Usuario ya existe" });
    }
};

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