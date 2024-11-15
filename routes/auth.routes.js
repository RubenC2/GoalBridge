const express = require('express');
// Rutas 
const router = express.Router();
const authController = require('../controllers/auth.controller');
const validate = require('../middlewares/validator');
const { loginValidationRules } = require('../validation/authValidators');


router.get('/login', (req, res) => res.render('loginForm')); //Vista de ingreso de usuario ya registrado
router.post('/login', loginValidationRules(), validate, authController.login);
//router.get('/logout', authController.logout)



module.exports = router;


