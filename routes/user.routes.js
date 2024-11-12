const express = require('express');
const offers = require('./models/job.offer.model');  // El modelo de las ofertas de trabajo
const app = express();
const fs = require('fs');

app.get('/download-offers', async (req, res) => {
    try {
        // Obtener todas las ofertas de trabajo desde MongoDB
        const ofertas = await offers.find();

        // Convertir los datos en formato JSON
        const ofertasJSON = JSON.stringify(ofertas, null, 2);

        // Guardar el archivo JSON en el servidor
        fs.writeFileSync('ofertas_trabajo.json', ofertasJSON);

        // Enviar el archivo como respuesta para descargarlo
        res.download('ofertas_trabajo.json', 'ofertas_trabajo.json', (err) => {
            if (err) {
                console.error('Error al enviar el archivo', err);
                res.status(500).send('Error al descargar el archivo');
            } else {
                console.log('Archivo descargado correctamente');
            }
        });
    } catch (err) {
        console.error('Error al obtener las ofertas', err);
        res.status(500).send('Error al obtener las ofertas de trabajo');
    }
});

app.listen(3000, () => {
    console.log('Servidor en el puerto 3000');
});
