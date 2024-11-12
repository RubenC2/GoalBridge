const pool = require('../config/db_pgsql'); // conexion a base de datos
const apiQueries = require('../queries/api.queries') // Queries SQL
const bcrypt = require('bcryptjs');
require('dotenv').config();

async function createUser(nombre, apellidos, password, email, rol) {
    // const hashedPassword = await bcrypt.hash(password, 10);
    const values = [nombre, apellidos, password, email, rol];
    
    // const result = await pool.query(apiQueries.createNewUser, values);
    // return result.rows[0];
}

const functions = {
    createUser,
}

module.exports = functions;