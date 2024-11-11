const apiQueries = {
    createNewUser: 
    `INSERT INTO user2 (username, password, email, role) 
    VALUES ($1, $2, $3, $4)`,
}
module.exports = apiQueries;