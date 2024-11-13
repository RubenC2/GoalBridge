const userController = require("../controllers/user.controller");
const router = require('express').Router();
const express = require('express');


// Rutas funcionando
router.get('/', userController.getUsers);
router.post('/', userController.createUser);
router.put('/put', userController.updateUser);
router.get('/profile', (req, res) => res.render('userProfile')); // Vista de inicio de la app
// router.delete('/user', apiController.createUser);

module.exports = router;