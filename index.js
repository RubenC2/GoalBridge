const express = require("express"); // Importamos el paquete express
const app = express(); // Inciializar servidor con express
const port = 3000; // Puerto a usar por el servidor

app.use(express.json()); // Middleware para parsear el body de las peticiones


// Rutas

const webRoutes = require("./routes/web.routes") // Importa rutas
const apiRoutes = require("./routes/api.routes")

// HABILITACION DE RUTAS

app.use('/', webRoutes); 
app.use('/api',apiRoutes);


//middleware for 404
//app.use("*", manage404);

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`);
});