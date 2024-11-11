const pool = require('../config/db.pgsql');
const bcrypt = require('bcryptjs');
const queries = require('./queries');

async function createUser(username, password, email, role = 'user') {
    //const hashedPassword = await bcrypt.hash(password, 10);
    const values = [username, password, email, role];
    
    const result = await pool.query(queries.createUser, values);
    console.log(result)
    return result.rows[0];
}

// async function findUserByUsername(username) {
//     const values = [username];
//     const result = await pool.query(queries.findUserByUsername, values);
//     return result.rows[0];
// }

// module.exports = { createUser, findUserByUsername };

// createUser(['sergio', '123456', 'sergio@gmail.com', 'user'])
