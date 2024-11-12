// const express = require('express');
// const mongoose = require('mongoose');
// const app = express();

// // Conexión a MongoDB (asegúrate de que esta URL sea correcta para tu configuración)
// mongoose.connect('mongodb://localhost:27017/tuBaseDeDatos', { useNewUrlParser: true, useUnifiedTopology: true });

// // Middleware para procesar JSON en el cuerpo de las solicitudes
// app.use(express.json());

// // Importa la ruta de favoritos
// const favoritosRouter = require('./routes/favorites.routes'); // Asegúrate de que la ruta sea correcta
// app.use('/', favoritosRouter); // Registra la ruta en el servidor

// // Iniciar el servidor
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Servidor escuchando en el puerto ${PORT}`);
// });
