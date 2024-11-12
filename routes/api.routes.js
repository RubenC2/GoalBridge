const express = require('express');

const userController = require("../controllers/user.controller");
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const authorizeRole = require('../middlewares/roleMiddleware');
// const { usersRegister, login, logout } = require('../controllers/authController');

// Rutas terminadas

// ---------------------------------------------------------------------------------------------
// Rutas por hacer


// router.get('/', apiController.goHomePage);              // [GET] / Inicio                           
// router.get('/favorites', apiController.favorites);      // [GET] /favorites Vista de favoritos      
// router.get('/profile', apiController.profile);          // [GET] /profile Vista de los datos del perfil
// router.post('/logout', apiController.logout);           // [POST] /logout Salir (redirige a /)


// ! user = usuario 
// ! admin = administrador 
// ! users = usuario & administrador


// router.post('/api/user', apiController.usersRegister);                                  // ? [POST] /api/user Registrarse en la aplicación

// router.post('/api/login', apiController.usersLogin);                                    // ? [POST] /api/login Hacer login en la aplicación

// router.put('/api/user', apiController.editRegister);                   // [PUT] /api/user Editar datos del perfil del usuario o administrador
// router.delete('/api/user', apiController.adminDeleteUser);             // [DELETE] /api/user Borrar un usuario de la base de datos (admin)
// router.post('/api/logout', apiController.usersLogout);                 // ? [POST] /api/logout Salir
// router.get('/api/search', apiController.search);                       // [GET] /api/search Listado de resultados de la búsqueda
// router.post('/api/ads', apiController.adminAdsAdd);                    // [POST] /api/ads Crear nueva oferta de trabajo/subvención/evento (admin)
// router.put('/api/ads', apiController.adminEditRegister);               // [PUT] /api/ads Editar datos de una oferta de trabajo/subvención/evento (admin)
// router.delete('/api/ads', apiController.adminDeleteAds);               // [DELETE] /api/ads Borrar una oferta de trabajo/subvención/evento de la base de datos (admin)
// router.post('/api/favorites', apiController.userFavorites);            // [POST] /api/favorites Guardar favorito del usuario
// router.delete('/api/favorites', apiController.userDeleteFavorites);    // [DELETE] /api/favorites Borrar favorito del usuario
// router.get('/recoverpassword', apiController.usersPassRecover);        // [GET] /recoverpassword Recuperar password
// router.get('/restorepassword', apiController.usersPassRestore);        // [GET] /restorepassword Cambiar password


// router.get('/user/dashboard', authMiddleware, authorizeRole('user'), (req, res) => {    // [GET] /profile Vista del USUARIO con sus datos de perfil 
//     res.render('userDashboard', { role: 'user' });
// });
// router.get('/admin/dashboard', authMiddleware, authorizeRole('admin'), (req, res) => {   // [GET] /profile Vista del ADMINISTRADOR con sus datos de perfil 
//     res.render('adminDashboard', { role: 'admin' });
// });


// ! ELIMINAMOS /profile y creamos /user/dashboard y /admin/dashboard para >> Vista del usuario o el administrador del middleware auth
// router.get('/profile', webController.popUpUserProfile);         [GET] /profile Vista del usuario o el administrador con sus datos de perfil 
// ! ------------------------------------------------------


// ------------------------------------------------------------
// Rutas funcionando
router.get('/user', userController.getEntries);
router.post('/user', userController.createEntry);
// router.put('/user', apiController.createUser);
// router.delete('/user', apiController.createUser);




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
