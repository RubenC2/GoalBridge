const userModel = require('../models/users.model');  // Importación del modelo Product
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


    
// GET http://localhost:3000/user?email=hola@gmail.com --> por email
const getUsersToPrint = async (req, res) => {
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

const getUsers = async (req, res) => {
    let users;

    try {

        if (req.query.email) {
            
            users = await userModel.getUserByEmail(req.query.email);
        } else {
            
            users = await userModel.getAllUsers();
        }

        
        res.json({ usuarios: users });
    } catch (err) {
        
        res.status(500).json({ error: 'Error al obtener los usuarios: ' + err });
    }
};


// CREAR
const createUserAndRedirect = async (req, res) => {
    const newUser = req.body; 

    try {
        const response = await userModel.createUser(newUser);

        res.status(201).redirect('/user/profile');
    } catch (error) {
        console.error("Error al crear el usuario:", error);

        res.status(400).json({ success: false, message: "Usuario ya existe" });
    }
};

const createUser = async (req, res) => {
    const newUser = req.body; 

    try {
        
        const response = await userModel.createUser(newUser);

        
        res.status(201).json({ success: true, user: response });
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
// const deleteUser = async (req, res) => {
//     try {
//         const usuarioId = req.params.id

//         if (!usuarioId) {
//             // Si no se proporciona un ID, devuelve un error
//             return res.status(400).json({ message: 'Se requiere un ID para eliminar un usuario' });
//         }

//         console.log(`Intentando borrar el usuario con ID: ${usuarioId}`);

//         // Ejecuta la consulta SQL para eliminar el usuario por ID
//         const result = await userModel.deleteUser(usuarioId);

//         if (result.affectedRows === 0) {
//             // Si no se elimina ningún registro, responde con un mensaje apropiado
//             return res.status(404).json({ message: `No se encontró ningún usuario con el ID: ${usuarioId}` });
//         }

//         // Si la eliminación es exitosa
//         res.status(200).json({ message: `Se ha borrado el usuario con ID: ${usuarioId}` });
//     } catch (error) {
//         console.error('Error al eliminar usuario:', error);
//         res.status(500).json({ message: 'Error al eliminar el usuario' });
//     }
// };


module.exports = {
    getUsers,
    createUser,
    //deleteUser,
    updateUser,
    getUsersToPrint,
    createUserAndRedirect
}