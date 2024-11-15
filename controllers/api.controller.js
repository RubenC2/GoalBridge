const userModel = require('../models/jobOffer2'); 
const dbPostgres = require('../config/db_pgsql'); 
const apiQueries = require ('../queries/api.queries')
const jwt = require('jsonwebtoken');

const addFavorite = async (req, res) => {
    const ofertaId = req.body.ofertaId;  
    const token = req.cookies.token; 

    if (!ofertaId || !token) {
        return res.status(400).json({ success: false, message: "Datos insuficientes" });
    }
    try {

        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        const usuarioId = decodedToken.user[0].id; 
        console.log(decodedToken.user[0].id)
        
        const oferta = await userModel.findById(ofertaId);
        if (!oferta) {
            return res.status(404).json({ success: false, message: 'Oferta no encontrada en MongoDB' });
        }

        await dbPostgres.query(apiQueries.addFavorite, [usuarioId, ofertaId]);
        res.redirect('/user/profile');
    } catch (error) {
        console.error('Error al agregar favorito:', error);

        if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
            return res.status(401).json({ success: false, message: 'Token inválido o expirado' });
        }

        res.status(500).json({ success: false, message: 'Error al agregar a favoritos' });
    }
};

const addFavoriteById = async (req, res) => {
    const usuarioId = req.params.id;      
    const ofertaId = req.body.ofertaId;   

    if (!ofertaId) {
        return res.status(400).json({ success: false, message: "Datos insuficientes" });
    }

    try {

        const oferta = await userModel.findById(ofertaId);
        if (!oferta) {
            return res.status(404).json({ success: false, message: 'Oferta no encontrada en MongoDB' });
        }

        await dbPostgres.query(apiQueries.addFavorite, [usuarioId, ofertaId]);

        return res.status(201).json({
            success: true,
            message: 'Favorito agregado correctamente',
            data: {
                usuarioId: usuarioId,
                ofertaId: ofertaId,
            }
        });
    } catch (error) {
        console.error('Error al agregar favorito:', error);

        if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
            return res.status(401).json({ success: false, message: 'Token inválido o expirado' });
        }

        res.status(500).json({ success: false, message: 'Error al agregar a favoritos' });
    }
};


const getFavoritesToPrint = async (req, res) => {    
    const token = req.cookies.token; 

    if (!token) {
        return res.status(400).json({ success: false, message: "Datos insuficientes" });
    }

    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        const usuarioId = decodedToken.user[0].id; 
        console.log(decodedToken.user[0].id)

        const favorites = await dbPostgres.query(apiQueries.getFavorites, [usuarioId]);

        console.log(favorites.rows);  

        res.render('userProfile', { favorites: favorites.rows }) 
    } catch (error) {
        console.error('Error al mostrar favorito:', error);

        if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
            return res.status(401).json({ success: false, message: 'Token inválido o expirado' });
        }

        res.status(500).json({ success: false, message: 'Error al agregar a favoritos' });
    }
}



const getFavorites = async (req, res) => {    
    const usuarioId = req.params.id;      

    if (!usuarioId) {
        return res.status(400).json({ success: false, message: "Usuario incorrecto" });
    }
    try {
        
        const favorites = await dbPostgres.query(apiQueries.getFavorites, [usuarioId]);
        const offerIds = favorites.rows.map(row => row.offers_id);

        return res.status(201).json({
            success: true,
            message: 'Lista favoritos',
            data: offerIds  
        });
        
    } catch (error) {
        console.error('Error al mostrar favoritos:', error);
    }
}

const deleteFavorite = async (req, res) => {    
    const favoriteId = req.params.id;  

    if (!favoriteId) {
        return res.status(400).json({ success: false, message: "ID del favorito es necesario" });
    }
    try {
        
        const result = await dbPostgres.query(apiQueries.deleteFavorite, [favoriteId]);
        
        if (result.rowCount === 0) {
            return res.status(404).json({ success: false, message: "Favorito no encontrado" });
        }

        return res.status(200).json({ success: true, message: "Favorito eliminado correctamente" });
    } catch (error) {
        console.error('Error al eliminar favorito:', error);
        res.status(500).json({ success: false, message: 'Error al eliminar favorito' });
    }
};

module.exports = { 
    addFavorite,
    addFavoriteById,
    getFavorites, 
    deleteFavorite,
    getFavoritesToPrint
};
