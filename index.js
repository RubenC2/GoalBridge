const express = require("express"); // Importamos el paquete express
const app = express(); // Inciializar servidor con express
const port = 3000; // Puerto a usar por el servidor
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
dotenv.config();
const path = require('path');

// -------------------------------------------------------------------------

// MiddlewareS                      AUTH & ROL CONTROL
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());




// Middlewares


dotenv.config();

// Logger, formato de lo que sale por terminal
app.use(express.json()); // Middleware para parsear el body de las peticiones
app.use(express.static("public")); //Middleware para servir archivos estáticos de front. CSS, JS, assets.
app.use(express.urlencoded({ extended: true })); // para trabajar con los datos que llegan por el formulario
app.use(cookieParser());

//Configuración de vistas PUG - Motor de plantillas
app.set('views', path.join(__dirname, 'views')); // Configura correctamente el directorio de vistas
app.set('view engine', 'pug'); // Configura el motor de vistas como Pug

// MiddlewareS                      MANAGE 404 ERROR
const manage404 = require("./middlewares/manage404");


// MiddlewareS                      MORGAN
// const morgan = require("./middlewares/morgan");
// app.use(morgan(':method :url :status :param[id] - :response-time ms :body'));

// -- Middleware                    BODY-PARSER
app.use(express.json());        


// -------------------------------------------------------------------------

const webRoutes = require("./routes/web.routes") // Importa rutas
const apiRoutes = require("./routes/api.routes")
// const authRoutes = require('./routes/auth.routes');
// HABILITACION DE RUTAS


// Habilitacion de                  RUTAS
app.use('/', webRoutes); 

app.use('/api',apiRoutes);
app.use('/adminProfile', webRoutes); 



// Habilitacion de rutas
//app.use('/',notLoggedRoutes); 
// app.use('/api/user',loggedRoutes);
// app.use('/api/ads',adminRoutes);


// app.use('/register', authRoutes);


//middleware for 404

app.use("*", manage404);

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`);
});

