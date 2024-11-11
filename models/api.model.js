const pool = require('../config/db_pgsql'); // conexion a base de datos
const apiQueries = require('../queries/api.queries') // Queries SQL
const bcrypt = require('bcryptjs');
require('dotenv').config();

async function createUser(username, password, email, role = 'user') {
    const hashedPassword = await bcrypt.hash(password, 10);
    const values = [username, hashedPassword, email, role];
    
    const result = await pool.query(apiQueries.createNewUser, values);
    return result.rows[0];
}

async function findUserByUsername(username) {
    const values = [username];
    const result = await pool.query(apiQueries.getUsers, values);
    return result.rows[0];
}

module.exports = { createUser, findUserByUsername };

// const createNewUser = async (newUser) => {
//     const { username, password, email, role } = newUser;  // Asegúrate de que el objeto tenga "username"
//     let client, result;
//     try {
//         client = await pool.connect();
//         const data = await client.query(apiQueries.createNewUser,[username, password, email, role]);
//         result = data.rowCount;
//     } catch (err) {
//         console.log(err);
//         throw err;
//     } finally {
//         client.release();
//     }
//     return result;
// };

// const functions = {
//     createNewUser,

// }

// module.exports = functions;