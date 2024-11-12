// // routes/favorites.routes.js
// const express = require('express');
// const router = express.Router();
// const Favorito = require('../models/favorites.model'); // Ruta al modelo correcto

// // Ruta para agregar un favorito
// router.post('/favorites/agregar', async (req, res) => {
//     const { id, puesto, empresa, salario, descripcion, modalidad, requisitos } = req.body;

//     try {
//         // Crear un nuevo documento de favorito
//         const nuevoFavorito = new Favorito({
//             id,
//             puesto,
//             empresa,
//             salario,
//             descripcion,
//             modalidad,
//             requisitos
//         });

//         // Guardar el favorito en la base de datos
//         await nuevoFavorito.save();

//         // Responder con un mensaje de éxito
//         res.status(201).json({ message: 'Oferta añadida a favoritos' });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Error al añadir a favoritos' });
//     }
// });

// module.exports = router;
