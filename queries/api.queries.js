const apiQueries = {
    addFavorite: 'INSERT INTO favorites(users_id, offers_id) VALUES($1, $2)',
    getFavorites: 'SELECT offers_id FROM favorites WHERE users_id = $1',
    deleteFavorite: 'DELETE FROM favorites WHERE users_id = $1',
    getOffersDetails:'SELECT puesto, empresa, salario FROM ofertas WHERE offers_id = ANY($1)'
}
module.exports = apiQueries;