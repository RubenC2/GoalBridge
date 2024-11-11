const express = require('express');
// Rutas 
const webController = require("../controllers/web.controller");
const router = express.Router();


// ! user = usuario 
// ! admin = administrador 
// ! users = usuario & administrador


router.get('/', webController.goHomePage);                             // [GET] / Vista de inicio de la app       

// -----------------------------------------------------------------------------------------------------
// Rutas por hacer

// router.get('/favorites', webController.popUpUserFavorites);            // [GET] /favorites Vista del usuario con sus favoritos
// router.get('/users', webController.popUpAdminUsersViewer);             // [GET] /users Vista del administrador con el listado de usuario registrados (admin)
// router.get('/dashboard', webController.popUpAdminAdsViewer);           // [GET] /dashboard Vista del administrador para crear y visualizar sus anuncios (admin)
// router.get('/signup', webController.popUpUsersRegister); 
// router.post('/singup',webController.popUpUsersRegister);                 // [GET] /signup Vista de registro de usuario
// router.get('/login', webController.popUpUsersRegistered);              // [GET] /login Vista de ingreso de usuario ya registrado


module.exports = router;

