const authorsQueries = {
    createAuthor: `INSERT INTO user2(user, password, email, role) 
    VALUES ($1,$2,$3, user)`,
    getUsers: `
    SELECT user, password, email, role
    FROM user2;
    `
}
module.exports = authorsQueries;