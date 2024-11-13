const userModel = require('../models/job.offer.model'); // Modelo de usuario en MongoDB
const dbPostgres = require('../config/db_pgsql'); // Conexión a PostgreSQL

const addFavorite = async (req, res) => {
    const ofertaId = req.body.ofertaId;  // ID de la oferta en MongoDB
    const usuarioId = req.body.usuarioId; // ID del usuario en PostgreSQL

    if (!ofertaId || !usuarioId) {
        return res.status(400).json({ message: "Datos insuficientes" });
    }

    try {
        // Verifica si la oferta existe en MongoDB
        const oferta = await userModel.findById(ofertaId);
        if (!oferta) {
            return res.status(404).json({ message: 'Oferta no encontrada en MongoDB' });
        }

        // Inserta en PostgreSQL usando client.query
        const query = 'INSERT INTO favorites(users_id, offers_id) VALUES($1, $2)';
        const values = [usuarioId, ofertaId];
        
        await dbPostgres.query(query, values);

        res.status(200).json({ message: 'Oferta agregada a favoritos en PostgreSQL' });
    } catch (error) {
        console.error('Error al agregar favorito:', error);
        res.status(500).json({ message: 'Error al agregar a favoritos', error });
    }
};

module.exports = { addFavorite };
