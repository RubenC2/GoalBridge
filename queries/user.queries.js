
const queries = {
    getUSerByEmail: `
    SELECT id
    FROM users
    WHERE email = $1`,
    getAllUsers: `SELECT * FROM users`,
    createUser: `INSERT INTO users (nombre, apellidos, email, password) 
    VALUES ($1, $2, $3, $4)`,
    updateUser: `UPDATE users
    SET nombre = $1 , apellidos = $2, email = $3, password = $4
    WHERE email = $3`,
    deleteUser: `DELETE FROM users
    WHERE id = $1`, 
}
module.exports = queries;