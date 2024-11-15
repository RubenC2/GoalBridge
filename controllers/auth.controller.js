const { createUser, getUserByEmail } = require('../models/users.model');
const jwt = require('jsonwebtoken');

async function register(req, res) {
    const { nombre, apellidos, email, password, rol } = req.body;
    try {
        const newUser = await createUser(nombre, apellidos, email, password, rol);
        res.redirect('/login');
    } catch (error) {
        res.status(500).send('Error en el registro');
    }
}

async function login(req, res) {
    const { email, password } = req.body;
    try {
        const user = await getUserByEmail(email);
        console.log(user)
        if (user) {
            const token = jwt.sign(
                {user}, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.cookie('token', token, { httpOnly: true });
            res.redirect(user.rol === 'admin' ? '/joboffers/create' : '/user/profile');
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

module.exports = { register, login, logout };