const express = require('express');
// Rutas 
// const webController = require("../controllers/web.controller");
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const authorizeRole = require('../middlewares/roleMiddleware');
const validate = require('../middlewares/validator');
const { loginValidationRules } = require('../validation/authValidators');

// -------------------------
// Rutas funcionando

router.get('/', (req, res) => res.render('home')); // Vista de inicio de la app
router.get('/register', (req, res) => res.render('register')); //Vista de registro de usuario

// router.get('/profile', authMiddleware, authorizeRole('admin'), (req, res) => {  // Vista del usuario o el administrador con sus datos de perfil
//     res.render('dashboard', { role: 'admin' });
// });



module.exports = router;

