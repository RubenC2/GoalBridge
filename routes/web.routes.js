const express = require('express');
// Rutas 
const webController = require("../controllers/web.controller");
const router = express.Router();

// Endpoints notLogged

// [GET] / Inicio
// [GET] /register Registrarse
// [GET] /login Ingresar

router.get('/', webController.goHomePage); // Las rutaS "/" y las rutaS "/profile", deben repetirse?¿
// router.get('/register', notLoggedController.getNotLoggedRegister);
// router.get('/login', notLoggedController.getNotLoggedLogi);

module.exports = router;