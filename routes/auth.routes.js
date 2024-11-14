const express = require('express');
// Rutas 
// const webController = require("../controllers/web.controller");
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const authorizeRole = require('../middlewares/roleMiddleware');
const authController = require('../controllers/auth.controller')

router.get('/login', (req, res) => res.render('loginForm')); //Vista de ingreso de usuario ya registrado
router.post('/login', authController.login)

module.exports = router;