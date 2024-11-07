const express = require('express');
// Rutas 
const notLoggedController = require("../controllers/notLogged.controller");
const router = express.Router();

// Endpoints notLogged

// [GET] / Inicio
// [GET] /register Registrarse
// [GET] /login Ingresar

router.get('/', notLoggedController.goHomePage); // Las rutaS "/" y las rutaS "/profile", deben repetirse?¿
// router.get('/register', notLoggedController.getNotLoggedRegister);
// router.get('/login', notLoggedController.getNotLoggedLogi);

module.exports = router;