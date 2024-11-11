const express = require('express');
// Rutas 
const webController = require("../controllers/web.controller");
const router = express.Router();

// -------------------------
// Rutas funcionando

router.get('/', webController.goHomePage); // Vista de inicio de la app
router.get('/users', webController.getUsers); // Vista del administrador con el listado de usuario registrados (admin)
//router.get('/login', (req, res) => res.render('loginForm'));
//router.post('/login')//, //login);

// --------------------------------------------
// Rutas por hacer

//router.get('/login', webController.goLoginPage); // Vista de ingreso de usuario ya registrado

module.exports = router;