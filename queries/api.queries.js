const apiQueries = {
    addFavorite: `INSERT INTO favorites(users_id, offers_id) 
    VALUES($1, $2)`
}
module.exports = apiQueries;