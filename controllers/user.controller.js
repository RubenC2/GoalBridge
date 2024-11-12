// const userModel = require('../models/users.model');  // Importación del modelo Product
const userService = require('../services/user.service');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const entry = require('../models/users.model'); // Importar el modelo de la BBDD

//getEntries
// if(hay email)
//     busca por mail
// else
//     busca todo


// GET http://localhost:3000/entries --> ALL
const getEntriesWithoutID = async (req, res) => {   
      let entries = await entry.getDataAuthorWithoutID(req.query);
      res.status(200).json(entries); // [] con las entries encontradas
    }
    
// GET http://localhost:3000/entries?email=hola@gmail.com --> por email
const getEntries = async (req, res) => {
    let entries; 
    if (req.query.email) {
        entries = await entry.getEntriesByEmail(req.query.email);
    }
    else {
        entries = await entry.getAllEntries();
    }
    res.status(200).json(entries); // [] con las entries encontradas
}

//createEntry
// POST http://localhost:3000/api/entries
// let newEntry = {
//     title:"noticia desde Node",
//     content:"va a triunfar esto2",
//     email:"alejandru@thebridgeschool.es",
//     category:"sucesos"}

// Crear entry por email
const createEntry = async (req, res) => {
    const newEntry = req.body; // {title,content,email,category}
    const response = await entry.createEntry(newEntry);
    res.status(201).json({
        "items_created": response,
        data: newEntry
    });
}

const updateEntry = async (req, res) => {
    let entries; 
    if (req.query.title) {
        entries = await entry.updateEntry({message: `Se ha modificado la entry ${title}`}
        );
    }
    else {
        entries = await entry.getAllEntries();
    }
    res.status(200).json(entries); // [] con las entries encontradas
}

const deleteEntry = async (req, res) => {
    let entries; 
    if (req.body.title) {
        console.log(req.query.title)
        entries = await entry.deleteEntry({message: `Se ha borrado la entry ${title}`});
    }
    else {
        entries = await entry.getAllEntries();
    }
    res.status(200).json(entries); // [] con las entries encontradas
}

//// Borrar
// const deleteEntry = async (req, res) => {
//     const title = req.body.title; // {title,content,email,category}
//     const response = await entry.deleteEntry(title);
//     res.status(201).json({
//         "item_deleted": response,
//         message: `Se ha borrado la entry: ${title}`,
//         data: response
//     });
// }

module.exports = {
    getEntries,
    createEntry,
    getEntriesWithoutID,
    deleteEntry,
    updateEntry 
}