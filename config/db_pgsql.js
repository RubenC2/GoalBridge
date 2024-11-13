const {Pool} = require('pg');
require('dotenv').config();

// const pool = new Pool({ 
//     host: 'localhost',
//     user: 'postgres',
//     port: '5432',
//     database: 'postgres',
//     password: '123456'
     
// })
const pool = new Pool({  
    user: process.env.DB_USER, 
    host: process.env.DB_HOST, 
    database: process.env.DB_DATABASE, 
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    ssl:true
     
})
module.exports = pool;

