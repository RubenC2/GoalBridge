const queries = {
    createUser: `
        INSERT INTO users (username, password, email, role) 
        VALUES ($1, $2, $3) 
        RETURNING *;
    `,
    
    findUserByUsername: `
        SELECT * FROM users 
        WHERE username = $1;
    `
};

module.exports = queries;
