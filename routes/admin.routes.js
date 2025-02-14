const express = require('express');
// Rutas 

const router = express.Router();


router.get('/users', (req, res) => {
    res.render('dashboardProfile')
});

module.exports = router;