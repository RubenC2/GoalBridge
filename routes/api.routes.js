const express = require('express');
// Rutas 
const apiController = require("../controllers/api.controller");
const router = express.Router();

// ------------------------------------------------------------
// Rutas funcionando

router.get('/', apiController.goHomePage);
router.post('/user', apiController.createUser);


// ----------------------------------------------------------
// Rutas por hacer

//router.get('/favorites', notLoggedController.getNotLoggedRegister);
//router.get('/profile', notLoggedController.getNotLoggedLogi);
//router.post('/logout', notLoggedController.getNotLoggedLogi);



// [POST] /api/user Registrarse en la aplicación
// [PUT] /api/user Editar datos del perfil del usuario o administrador
// [DELETE] /api/user Borrar un usuario de la base de datos (admin)
// [POST] /api/login Hacer login en la aplicación
// [POST] /api/logout Salir
// [GET] /api/search Listado de resultados de la búsqueda
// [POST] /api/ads Crear nueva oferta de trabajo/subvención/evento (admin)
// [PUT] /api/ads Editar datos de una oferta de trabajo/subvención/evento (admin)
// [DELETE] /api/ads Borrar una oferta de trabajo/subvención/evento de la base de datos (admin)
// [POST] /api/favorites Guardar favorito del usuario
// [DELETE] /api/favorites Borrar favorito del usuario
// [GET] /recoverpassword Recuperar password
// [GET] /restorepassword Cambiar password

module.exports = router;