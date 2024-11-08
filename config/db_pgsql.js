const {Pool} = require('pg');
require('dotenv').config();
// Prueba de lectura de .env
// console.log("*******************");
// console.log(process.env.DB_USER);
// console.log(process.env.DB_HOST);

const pool = new Pool({ 
    user: process.env.DB_USER, 
    host: process.env.DB_HOST, 
    database: process.env.DB_DATABASE, 
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT, 
})
module.exports = pool;