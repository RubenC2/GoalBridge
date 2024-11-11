const pool = require('../config/db_pgsql'); // conexion a base de datos
const apiQueries = require('../queries/api.queries') // Queries SQL
const bcrypt = require('bcryptjs');
require('dotenv').config();

async function createUser(username, password, email, role = 'user') {
    const hashedPassword = await bcrypt.hash(password, 10);
    const values = [username, hashedPassword, email, role];
    
    const result = await pool.query(queries.createUser, values);
    return result.rows[0];
}

const functions = {
    createUser,

}

module.exports = functions;