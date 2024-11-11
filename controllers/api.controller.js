
// const { createUser, findUserByUsername } = require('../models/users.model');   // de models/user.model.js
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Funcion goHome
const goHomePage = async (req, res) => {
    res.render('home.pug')
};


