const express = require('express');
// Rutas 
const webController = require("../controllers/web.controller");
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const authorizeRole = require('../middlewares/roleMiddleware');


// ! user = usuario 
// ! admin = administrador 
// ! users = usuario & administrador


// -------------------------
// Rutas funcionando

router.get('/', (req, res) => res.render('home.pug')); // Vista de inicio de la app

router.get('/singup', (req, res) => res.render('register')); //Vista de registro de usuario

router.get('/login', (req, res) => res.render('login')); //Vista de ingreso de usuario ya registrado

router.get('/profile', authMiddleware, authorizeRole('admin'), (req, res) => {  // Vista del usuario o el administrador con sus datos de perfil
    res.render('dashboard', { role: 'admin' });
});
// Aqui va la ruta favoritos
router.get('/profile', authMiddleware, authorizeRole('user'), (req, res) => {  // Vista del usuario o el administrador con sus datos de perfil
    res.render('dashboard', { role: 'user' });
});

router.get('/users', webController.getUsers); // Vista del administrador con el listado de usuario registrados (admin)


router.get('/admin/dashboard', authMiddleware, authorizeRole('admin'), (req, res) => {
    res.render('adminDashboard', { role: 'admin' });
});

//router.get('/login', (req, res) => res.render('loginForm'));
//router.post('/login')//, //login);


// router.get('/register', (req, res) => res.render('register'));
// router.post('/register')//, //login);


// --------------------------------------------
// Rutas por hacer

//router.get('/login', webController.goLoginPage); // Vista de ingreso de usuario ya registrado

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

