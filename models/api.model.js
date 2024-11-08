const pool = require('../config/db_pgsql'); // conexion a base de datos
const apiQueries = require('../queries/api.queries') // Queries SQL
require('dotenv').config();

const createNewUser = async (newUser) => {
    const { username, password, email, role } = newUser;  // Asegúrate de que el objeto tenga "username"
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(apiQueries.createNewUser,[username, password, email, role]);
        result = data.rowCount;
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result;
};

const functions = {
    createNewUser,

}

module.exports = functions;