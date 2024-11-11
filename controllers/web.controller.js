
const users = require('../models/web.model'); // Importar el modelo de la BBDD

// Funcion goHome


const goHomePage = async (req, res) => {
    res.render('adminProfile.pug')
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


const getUsers = async (req, res) => { 
    try {
        let user = await users.getAllUsers(req.query);
        res.status(200).json(user);
    } catch (error) {
        console.error('Error al obtener usuarios:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}
    

};

module.exports = {
    goHomePage,
    popUpUsersRegister,
    getUsers
};