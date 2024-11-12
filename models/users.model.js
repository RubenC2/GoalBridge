const { Pool } = require('pg');
const queries = require('../queries/user.queries') // Queries SQL

const pool = new Pool({
    host: "localhost",
    user: "postgres",
    database: "postgres",
    port: "5432",
    password: "123456",
  })

// GET
const getEntriesByEmail = async (email) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.getEntriesByEmail, [email])
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
const getAllEntries = async () => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.getAllEntries)
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



async function createEntry(data) {
  try {
    // Extrae y valida los parámetros necesarios
    const { title, content, id_author, category } = data;
    
    // Verificación de que ninguno de los parámetros sea null o undefined
    if (!title || !content || !id_author || !category) {
      console.error("Error: uno o más parámetros están undefined o null.");
      return null; // Salir de la función si falta algún parámetro
    }

    // Define la consulta SQL con placeholders ($1, $2, etc.)
    const queryText = `
      INSERT INTO entries (title, content, id_author, category) 
      VALUES ($1, $2, $3, $4) 
      RETURNING *;
    `;
    
    // Ejecuta la consulta, pasando los parámetros como array
    const result = await pool.query(queryText, [title, content, id_author, category]);
    
    // Retorna el resultado si se ha insertado exitosamente
    return result.rows[0];
    
  } catch (err) {
    console.error("Error ejecutando createEntry:", err);
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
const updateEntry = async (title) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.updateEntry, [title])
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
const deleteEntry = async (title) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.deleteEntry, [title])
        result = data.rows
        
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

const entries = {
    getEntriesByEmail,
    getAllEntries,
    createEntry,
    updateEntry,
    deleteEntry
}

module.exports = entries;


