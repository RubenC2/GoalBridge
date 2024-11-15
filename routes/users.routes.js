const userController = require("../controllers/user.controller");
const router = require('express').Router();
const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');// Queries SQL
const apiController = require("../controllers/api.controller");

// Rutas funcionando
router.get('/', userController.getUsers);
router.get('/list', userController.getUsersToPrint);
router.post('/', userController.createUser);
router.post('/create', authMiddleware, userController.createUserAndRedirect);
// router.put('/:email', userController.updateUser); // no funciona
//router.delete('/:id', userController.deleteUser); 
router.get('/profile', apiController.getFavoritesToPrint);

module.exports = router;