const express = require('express');
// Rutas 
const apiController = require("../controllers/api.controller");
const router = express.Router();


router.get('/', apiController.goHomePage);              // [GET] / Inicio                           
router.get('/favorites', apiController.favorites);      // [GET] /favorites Vista de favoritos      
router.get('/profile', apiController.profile);          // [GET] /profile Vista de los datos del perfil
router.post('/logout', apiController.logout);           // [POST] /logout Salir (redirige a /)


// ! user = usuario 
// ! admin = administrador 
// ! users = usuario & administrador

router.post('/api/user', apiController.usersRegister);                 // [POST] /api/user Registrarse en la aplicación
router.put('/api/user', apiController.editRegister);                   // [PUT] /api/user Editar datos del perfil del usuario o administrador
router.delete('/api/user', apiController.adminDeleteUser);             // [DELETE] /api/user Borrar un usuario de la base de datos (admin)
router.post('/api/login', apiController.usersLogin);                   // [POST] /api/login Hacer login en la aplicación
router.post('/api/logout', apiController.usersLogout);                 // [POST] /api/logout Salir
router.get('/api/search', apiController.search);                       // [GET] /api/search Listado de resultados de la búsqueda
router.post('/api/ads', apiController.adminAdsAdd);                    // [POST] /api/ads Crear nueva oferta de trabajo/subvención/evento (admin)
router.put('/api/ads', apiController.adminEditRegister);               // [PUT] /api/ads Editar datos de una oferta de trabajo/subvención/evento (admin)
router.delete('/api/ads', apiController.adminDeleteAds);               // [DELETE] /api/ads Borrar una oferta de trabajo/subvención/evento de la base de datos (admin)
router.post('/api/favorites', apiController.userFavorites);            // [POST] /api/favorites Guardar favorito del usuario
router.delete('/api/favorites', apiController.userDeleteFavorites);    // [DELETE] /api/favorites Borrar favorito del usuario
router.get('/recoverpassword', apiController.usersPassRecover);        // [GET] /recoverpassword Recuperar password
router.get('/restorepassword', apiController.usersPassRestore);        // [GET] /restorepassword Cambiar password


module.exports = router;