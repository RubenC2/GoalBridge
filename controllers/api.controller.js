const userModel = require('../models/job.offer.model'); // Modelo de usuario en MongoDB
const dbPostgres = require('../config/db_pgsql'); // Conexión a PostgreSQL


// Funcion que almacena con boton pero solo en un id unico que le paso por valor a usuarioID
const addFavorite = async (req, res) => {
    const ofertaId = req.body.ofertaId;  // ID de la oferta en MongoDB
    const usuarioId = 3; // ID del usuario en PostgreSQL (ejemplo estático)

    if (!ofertaId || !usuarioId) {
        return res.status(400).json({ success: false, message: "Datos insuficientes" });
    }

    try {

        const oferta = await userModel.findById(ofertaId);
        if (!oferta) {
            return res.status(404).json({ success: false, message: 'Oferta no encontrada en MongoDB' });
        }
        const query = 'INSERT INTO favorites(users_id, offers_id) VALUES($1, $2)';
        const values = [usuarioId, ofertaId];
        
        await dbPostgres.query(query, values);

        res.redirect('/user/profile');
    } catch (error) {
        console.error('Error al agregar favorito:', error);

        res.status(500).json({ success: false, message: 'Error al agregar a favoritos' });
    }
};


// Funcion que almacena en favoritos por email

// const addFavorite = async (req, res) => {
//     const ofertaId = req.body.ofertaId;  // ID de la oferta en MongoDB
//     const email = req.body.email;        // Email del usuario, que se pasa en la solicitud

//     if (!ofertaId || !email) {
//         return res.status(400).json({ message: "Datos insuficientes" });
//     }

//     try {
//         // Verifica si la oferta existe en MongoDB
//         const oferta = await userModel.findById(ofertaId);
//         if (!oferta) {
//             return res.status(404).json({ message: 'Oferta no encontrada en MongoDB' });
//         }

//         // Obtener el usuarioId desde la base de datos PostgreSQL
//         const userQuery = 'SELECT id FROM users WHERE email = $1';
//         const result = await dbPostgres.query(userQuery, [email]);

//         if (result.rows.length === 0) {
//             return res.status(404).json({ message: 'Usuario no encontrado en PostgreSQL' });
//         }

//         const usuarioId = result.rows[0].id;  // El ID del usuario

//         // Inserta el favorito en la tabla de favoritos en PostgreSQL
//         const query = 'INSERT INTO favorites(users_id, offers_id) VALUES($1, $2)';
//         const values = [usuarioId, ofertaId];
        
//         await dbPostgres.query(query, values);

//         res.status(200).json({ message: 'Oferta agregada a favoritos en PostgreSQL' });
//     } catch (error) {
//         console.error('Error al agregar favorito:', error);
//         res.status(500).json({ message: 'Error al agregar a favoritos', error });
//     }
// };



module.exports = { 
    addFavorite,
    //addFavoriteByEmail
};
