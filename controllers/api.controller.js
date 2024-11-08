const users = require('../models/api.model'); // Importar el modelo de la BBDD

const goHomePage = async (req, res) => {
    res.render('home.pug')
};

const createUser = async (req, res) => {
    const { username, password, email, role } = req.body;
    
    // Verificar que los campos requeridos no sean nulos o undefined
    if (!username || !password || !email) {
        return res.status(400).json({ error: "Faltan campos obligatorios" });
    }

    const newUser = { username, password, email, role };
    const response = await users.createNewUser(newUser);

    res.status(201).json({
        "items_created": response,
        data: newUser
    });
};

module.exports = {
    goHomePage,
    createUser
};

