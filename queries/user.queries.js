const UserQueries = {
    getUsers: `
    SELECT nombre, apellidos, email, password, rol
    FROM users;
    `
}
module.exports = UserQueries;