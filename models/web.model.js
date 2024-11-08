const pool = require('../config/db_pgsql'); // conexion a base de datos
const UserQueries = require('../queries/user.queries') // Queries SQL
require('dotenv').config();


const getAllUsers = async () => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(UserQueries.getUsers)
        result = data.rows
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}



const functions = {
    getAllUsers,

}

module.exports = functions;