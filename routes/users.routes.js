const userController = require("../controllers/user.controller");
const router = require('express').Router();
const express = require('express');


// Rutas funcionando
router.get('/get', userController.getUsers);
router.post('/create', userController.createUser);
router.put('/put', userController.updateUser);
// router.delete('/user', apiController.createUser);

module.exports = router;