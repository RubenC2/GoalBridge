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

        // Error de token inválido o expirado
        if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
            return res.status(401).json({ success: false, message: 'Token inválido o expirado' });
        }

        res.status(500).json({ success: false, message: 'Error al agregar a favoritos' });
    }
};



module.exports = { 
    addFavorite,
    //addFavoriteByEmail
};
