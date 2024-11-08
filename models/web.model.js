const { Pool } = require('pg');
const UserQueries = require('../queries/user.queries') // Queries SQL

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    port: '5432',
    database: 'postgres',
    password: '123456'
});

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

const entries = {
    getAllUsers,
}

module.exports = entries;