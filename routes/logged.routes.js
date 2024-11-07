const express = require('express');
// Rutas 
const notLoggedController = require("../controllers/notLogged.controller");
const router = express.Router();

// Endpoints notLogged

// [GET] / Inicio
// [GET] /favorites Vista de favoritos
// [GET] /profile Vista de los datos del perfil
// [POST] /logout Salir (redirige a /)

router.get('/', loggedController.goHomePage);
//router.get('/favorites', notLoggedController.getNotLoggedRegister);
//router.get('/profile', notLoggedController.getNotLoggedLogi);
//router.post('/logout', notLoggedController.getNotLoggedLogi);

module.exports = router;