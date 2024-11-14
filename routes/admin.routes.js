const express = require('express');
// Rutas 
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const authorizeRole = require('../middlewares/roleMiddleware');

router.get('/users', (req, res) => {
    res.render('dashboardProfile')
});

module.exports = router;