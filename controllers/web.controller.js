const webModels = require("../models/users.model");


// Funcion goHome

const goHomePage = async (req, res) => {
    res.render('home.pug')
};

// Funcion sigup 

async function popUpUsersRegister(req, res) {
    const { username, password, email, role = 'user' } = req.body;
    try {
        const newUser = await createUser(username, password, email, role);
        res.redirect('/home.pug'); // /login.pug ?¿¿
    } catch (error) {
        res.status(500).send('Error en el registro');
    }
};

module.exports = {
    goHomePage,
    popUpUsersRegister
};