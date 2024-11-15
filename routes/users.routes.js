const userController = require("../controllers/user.controller");
const router = require('express').Router();
const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');// Queries SQL
const apiController = require("../controllers/api.controller");

// Rutas funcionando
router.get('/', userController.getUsers);
router.post('/', authMiddleware, userController.createUser);
router.put('/put', userController.updateUser);
router.get('/profile', apiController.getFavoritesToPrint);

module.exports = router;