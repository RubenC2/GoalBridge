const express = require("express"); // Importamos el paquete express
const app = express(); // Inciializar servidor con express
const port = 3000; // Puerto a usar por el servidor



app.use(express.json()); // Middleware para parsear el body de las peticiones
app.use(express.static('public'));

require('dotenv').config();


// Logger, formato de lo que sale por terminal
app.use(express.json()); // Middleware para parsear el body de las peticiones
app.use(express.static("public")); //Middleware para servir archivos estáticos de front. CSS, JS, assets.
app.use(express.urlencoded({ extended: true })); // para trabajar con los datos que llegan por el formulario

//Configuración de vistas PUG - Motor de plantillas
app.set('view engine', 'pug');
app.set('views','./views');

// Rutas

const webRoutes = require("./routes/web.routes") // Importa rutas
const apiRoutes = require("./routes/api.routes")

// HABILITACION DE RUTAS

app.use('/', webRoutes); 
app.use('/api',apiRoutes);
app.use('/adminProfile', webRoutes); 



// Habilitacion de rutas
//app.use('/',notLoggedRoutes); 
// app.use('/api/user',loggedRoutes);
// app.use('/api/ads',adminRoutes);

// Para ruta no existente

//middleware for 404

//app.use("*", manage404);

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`);
});
