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
async function createUser(data) {
  try {
    // Extrae y valida los parámetros necesarios
    const { nombre, apellidos, email, password } = data;
    
    // Verificación de que ninguno de los parámetros sea null o undefined
    if (!nombre || !apellidos || !email || !password) {
      console.error("Error: uno o más parámetros están undefined o null.");
      return null; // Salir de la función si falta algún parámetro
    }

    
    // Ejecuta la consulta, pasando los parámetros como array
    const result = await pool.query(queryText, [nombre, apellidos, email, password]);
    
    // Retorna el resultado si se ha insertado exitosamente
    return result.rows[0];
    
  } catch (err) {
    console.error("Error ejecutando createUser:", err);
    throw err; // 
  }
}


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


