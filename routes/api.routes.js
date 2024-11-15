const express = require('express');
const router = express.Router();
const { addFavorite, addFavoriteById, getFavorites, deleteFavorite } = require('../controllers/api.controller');

router.get('/favorites/:id', getFavorites);
router.post('/favorites', addFavorite);
router.post('/favorites/:id', addFavoriteById);
router.delete('/favorites/:id', deleteFavorite);


module.exports = router;
