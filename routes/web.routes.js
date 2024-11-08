const express = require('express');
// Rutas 
const webController = require("../controllers/web.controller");
const router = express.Router();


// ! popUp = usuario OR administrador > GET view
// ! user = usuario 
// ! admin = administrador 
// ! users = usuario & administrador


router.get('/', webController.goHomePage);                     // [GET] / Vista de inicio de la app
router.get('/signup', webController.popUpUsersRegister);       // [GET] /signup Vista de registro de usuario
router.get('/login', webController.popUpUsersRegistered);      // [GET] /login Vista de ingreso de usuario ya registrado
router.get('/favorites', webController.popUpUserFavorites);    // [GET] /favorites Vista del usuario con sus favoritos
router.get('/profile', webController.popUpUserProfile);        // [GET] /profile Vista del usuario o el administrador con sus datos de perfil
router.get('/users', webController.popUpAdminUsersViewer);     // [GET] /users Vista del administrador con el listado de usuario registrados (admin)
router.get('/dashboard', webController.popUpAdminAdsViewer);   // [GET] /dashboard Vista del administrador para crear y visualizar sus anuncios (admin)


module.exports = router;