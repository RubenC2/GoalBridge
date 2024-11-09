const express = require("express"); // Importamos el paquete express
const app = express(); // Inciializar servidor con express
const port = 3000; // Puerto a usar por el servidor

app.use(express.json()); // Middleware para parsear el body de las peticiones


// Rutas

const notLoggedRoutes = require("./routes/notLogged.routes") // Importa rutas
// const loggedRoutes = require("./routes/logged.routes")
// const adminRoutes = require("./routes/admin.routes")


// Habilitacion de rutas
app.use('/',notLoggedRoutes); 
// app.use('/api/user',loggedRoutes);
// app.use('/api/ads',adminRoutes);

// Para ruta no existente
//app.use("*", manage404);

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`);
});