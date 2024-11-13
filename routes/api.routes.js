const express = require('express');
const router = express.Router();
const { addFavorite } = require('../controllers/api.controller');

// Ruta para agregar una oferta a favoritos
router.post('/favorites', addFavorite);

module.exports = router;
