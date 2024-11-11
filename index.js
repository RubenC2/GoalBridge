const express = require("express"); // Importamos el paquete express
const app = express(); // Inciializar servidor con express
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
dotenv.config();

// -------------------------------------------------------------------------

// MiddlewareS                      AUTH & ROL CONTROL
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// MiddlewareS                      MANAGE 404 ERROR
const manage404 = require("./middlewares/manage404");
app.use("*", manage404);

// MiddlewareS                      MORGAN
const morgan = require("./middlewares/morgan");
app.use(morgan(':method :url :status :param[id] - :response-time ms :body'));

// -- Middleware                    BODY-PARSER
app.use(express.json());        


// -------------------------------------------------------------------------


// Definición de                    RUTAS
const webRoutes = require("./routes/web.routes");
const apiRoutes = require("./routes/api.routes");

// Habilitacion de                  RUTAS
app.use('/', webRoutes); 
app.use('/api',apiRoutes);


// -------------------------------------------------------------------------


//Server INFO
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});