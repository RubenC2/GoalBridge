
const { createUser, findUserByUsername } = require('../models/users.model');   // de models/user.model.js
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Funcion goHome

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
    const response = await users.createUser(newUser);

    res.status(201).json({
        "items_created": response,
        data: newUser
    });
};

module.exports = {
    goHomePage,
    createUser
};



// -----------------------------------------------------------------------------------------------------


async function login(req, res) {
    const { username, password } = req.body;
    try {
        const user = await findUserByUsername(username);
        if (user && await bcrypt.compare(password, user.password)) {
            const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.cookie('token', token, { httpOnly: true });
            res.redirect(user.role === 'admin' ? '/admin/dashboard' : '/user/dashboard');
        } else {
            res.status(401).send('Credenciales inválidas');
        }
    } catch (error) {
        res.status(500).send('Error en el inicio de sesión');
    }
}

function logout(req, res) {
    res.clearCookie('token');
    res.redirect('/login');
}

module.exports = {login, logout };
