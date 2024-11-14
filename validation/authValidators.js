const { body } = require ('express-validator');
const { login } = require('../controllers/auth.controller');

const loginValidationRules = () => {
    return [
        body('email').isEmail().withMessage('Ingrese un correo electrónico válido'),
        body('password').isLength({ min: 6 }).withMessage('La contraseña debe superar los 6 caracteres')
    ]
};

const registerValidationRules = () =>  {
    return [
        body('nombre').isLength({ min: 4 }).notEmpty().withMessage('Nombre requerido con mas de 4 caracteres'),
        body('apellidos').isLength({ min: 6 }).notEmpty().withMessage('Apellido requerido con mas de 6 caracteres'),
        body('email').isEmail().withMessage('Ingrese un correo electrónico válido'),
        body('password').isLength({ min: 6 }).withMessage('La contraseña debe superar los 6 caracteres'),
        body('rol').notEmpty().withMessage('Introduzca su rol')
    ]
};


module.exports = {
    loginValidationRules,
    registerValidationRules
};