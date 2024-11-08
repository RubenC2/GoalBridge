const users = require('../models/web.model'); // Importar el modelo de la BBDD


// Funcion goHome

const goHomePage = async (req, res) => {
    res.render('home.pug')
};

const createAuthor = async (req, res) => { // try - catch  falta if
    const newEntry = req.body; // {name, surname, email, image}
    const response = await author.createAuthor(newEntry);
    res.status(201).json({
        "items_created": response,
        data: newEntry
    });
}

const getUsers = async (req, res) => {  // hacer un try catch
    let user = await users.getAllUsers(req.query);
    res.status(200).json(user); // [] con las entries encontradas
}

module.exports = {
    goHomePage,
    createAuthor,
    getUsers
};

