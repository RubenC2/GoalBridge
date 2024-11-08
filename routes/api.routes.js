const express = require('express');
// Rutas 
const notLoggedController = require("../controllers/api.controller");
const router = express.Router();

// Endpoints notLogged

// [GET] / Inicio
// [GET] /favorites Vista de favoritos
// [GET] /profile Vista de los datos del perfil
// [POST] /logout Salir (redirige a /)

//router.get('/', loggedController.goHomePage);
//router.get('/favorites', notLoggedController.getNotLoggedRegister);
//router.get('/profile', notLoggedController.getNotLoggedLogi);
//router.post('/logout', notLoggedController.getNotLoggedLogi);

module.exports = router;

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