const queries = require('../queries/user.queries') // Queries SQL
const pool = require('../config/db_pgsql')

// GET
const getUserByEmail = async (email) => {
    console.log();
    
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.getUSerByEmail, [email])
        result = data.rows
        
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

// GET
const getAllUsers = async () => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.getAllUsers)
        result = data.rows
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}




// CREATE
async function createUser({ nombre, apellidos, email, password }) {
  try {
    
    // Verificación de que ninguno de los parámetros sea null o undefined
    if (!nombre || !apellidos || !email || !password) {
      console.error("Error: uno o más parámetros están undefined o null.");
      return null; // Salir de la función si falta algún parámetro
    }

    const values = [nombre, apellidos, email, password];
    const result = await pool.query(queries.createUser, values);
    return result.data
    
  } catch (err) {
    console.error("Error ejecutando createUser:", err);
    throw err; // 
  }
}
// {
//     "nombre": "Damian",
//     "apellidos": "Orellana",
//     "email": "damian@gmail.com",
//     "password": "123456",
//     "rol": "user"
// }

//UPDATE
const updateUser = async (title) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.updateUser, [email])
        result = data.rows
        
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

// DELETE
const deleteUser = async (title) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.deleteUser, [email])
        result = data.rows
        
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

const users = {
    getUserByEmail,
    getAllUsers,
    createUser,
    updateUser,
    deleteUser
}

module.exports = users;


