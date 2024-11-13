const express = require('express');
// Rutas 
const webController = require("../controllers/web.controller");
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const authorizeRole = require('../middlewares/roleMiddleware');


// -------------------------
// Rutas funcionando

router.get('/', (req, res) => res.render('home')); // Vista de inicio de la app
router.get('/register', (req, res) => res.render('register')); //Vista de registro de usuario

// router.get('/profile', authMiddleware, authorizeRole('admin'), (req, res) => {  // Vista del usuario o el administrador con sus datos de perfil
//     res.render('dashboard', { role: 'admin' });
// });
// Aqui va la ruta favoritos
// router.get('/profile', authMiddleware, authorizeRole('user'), (req, res) => {  // Vista del usuario o el administrador con sus datos de perfil
//     res.render('dashboard', { role: 'user' });
// });

// router.get('/users', webController.getUsers); // Vista del administrador con el listado de usuario registrados (admin)


module.exports = router;

