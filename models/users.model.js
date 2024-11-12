const { Pool } = require('pg');
const queries = require('../queries/user.queries') // Queries SQL
require('dotenv').config();
const pool = require('../config/db_pgsql')


// const pool = new Pool({
//     user: "goalbridge_user", 
//     host: "dpg-csp01ea3esus73cdo6bg-a.frankfurt-postgres.render.com", 
//     database: "goalbridge", 
//     password: "eqSnsxiCAJMxjcuFpi29biYYo2Kqw30q",
//     // port: 5432, 
//   })

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

    // Define la consulta SQL con placeholders ($1, $2, etc.)
    const queryText = `
      INSERT INTO users (nombre, apellidos, email, password) 
      VALUES ($1, $2, $3, $4) 
      RETURNING *;
    `;
    
    // Ejecuta la consulta, pasando los parámetros como array
    const result = await pool.query(queryText, [nombre, apellidos, email, password]);
    
    // Retorna el resultado si se ha insertado exitosamente
    return result.rows[0];
    
  } catch (err) {
    console.error("Error ejecutando createUser:", err);
    throw err; // Lanza el error para que el manejador superior pueda actuar
  }
}

// Ejemplo de uso de createEntry
// const newEntry = {
//   title: "Mi primer título",
//   content: "Este es el contenido de mi entrada.",
//   id_author: 1,        // ID de autor válido
//   category: "Blog"     // Categoría de entrada
// };

// createEntry(newEntry)
//   .then(entry => console.log("Entrada creada:", entry))
//   .catch(err => console.error("Error al crear la entrada:", err));


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


