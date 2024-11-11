const express = require('express');
const router = express.Router();
const { register, login, logout } = require('../controllers/auth.controller');
// const authMiddleware = require('../middlewares/authMiddleware');
// const authorizeRole = require('../middlewares/roleMiddleware');
const webController = require("../controllers/web.controller");

router.get('/register', (req, res) => res.render('register'));
router.post('/register', register);

router.get('/', webController.goHomePage); // Vista de inicio de la app
router.get('/users', webController.getUsers); // Vista del administrador con el listado de usuario registrados (admin)

router.get('/login', (req, res) => res.render('loginForm'));
router.post('/login', login);

router.get('/logout', logout);

module.exports = router;

// router.get('/user/dashboard', authMiddleware, authorizeRole('user'), (req, res) => {
//     res.render('userDashboard', { role: 'user' });
// });

// router.get('/admin/dashboard', authMiddleware, authorizeRole('admin'), (req, res) => {
//     res.render('adminDashboard', { role: 'admin' });
// });

