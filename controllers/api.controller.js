const { createUser, findUserByUsername } = require('../models/users.model');   // de models/user.model.js
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Funcion goHome

const goHomePage = async (req, res) => {
    res.render('home.pug')
};

module.exports = {
    goHomePage
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
