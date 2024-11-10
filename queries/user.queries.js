const UserQueries = {
    getUsers: `
    SELECT username, password, email, role
    FROM user2;
    `
}
module.exports = UserQueries;