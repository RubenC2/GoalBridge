const userController = require("../controllers/user.controller");
const router = require('express').Router();
const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware') // Queries SQL

// Rutas funcionando
//router.get('/login', (req, res) => res.render('loginForm')); //
router.get('/', userController.getUsers);
router.post('/', authMiddleware, userController.createUser);
router.put('/put', userController.updateUser);
router.get('/profile', (req, res) => res.render('userProfile')); // Vista de inicio de la app
//router.get('/login', (req, res) => res.render('loginForm')); //Vista de ingreso de usuario ya registrado
// router.delete('/user', apiController.createUser);

module.exports = router;