const { JobOffer, createOrUpdateOffer } = require('../models/job.offer.model');

// CREATE
const createOffer = async (req, res) => {
    console.log(req.body);

    try {
        const data = req.body;
        let answer = await createOrUpdateOffer(data);
        res.status(201).json(answer);
    } catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({ msj: `ERROR: ${error.stack}` });
    }
};
const scrapOffers = async (req, res) => {
    try {
        const keyword = req.query.keyword || '';  // Extrae la palabra clave de búsqueda desde los parámetros de la URL

        console.log('Search keyword:', keyword);  // Muestra en consola la palabra clave utilizada

        // Busca ofertas de trabajo que coincidan con la palabra clave en varios campos, hasta un máximo de 100 resultados
        const jobOffers = keyword
            ? await JobOffer.find({
                $or: [
                    { puesto: { $regex: keyword, $options: 'i' } },
                    { empresa: { $regex: keyword, $options: 'i' } },
                    { descripcion: { $regex: keyword, $options: 'i' } },
                    { modalidad: { $regex: keyword, $options: 'i' } },
                    { requisitos: { $regex: keyword, $options: 'i' } },
                    { salario: { $regex: keyword, $options: 'i' } },
                    { link: { $regex: keyword, $options: 'i' } }
                ],
            }).limit(100)
            : [];

        // Procesa y formatea cada oferta de trabajo encontrada
        const processedJobOffers = jobOffers.map(offer => {
            const offerObj = offer.toObject();  // Convierte el objeto de mongoose a un objeto JavaScript simple

            // Función para truncar texto largo con "..." si excede el límite de caracteres
            const truncateText = (text, maxLength = 150) => 
                text.length > maxLength ? text.substring(0, maxLength - 3) + '...' : text;

            // Trunca la descripción y los requisitos de la oferta a 150 caracteres
            offerObj.descripcion = truncateText(offerObj.descripcion);
            offerObj.requisitos = truncateText(offerObj.requisitos);

            // Evita que descripción y requisitos tengan contenido duplicado
            if (offerObj.descripcion === offerObj.requisitos) {
                offerObj.requisitos = 'No se proporcionaron requisitos específicos.';
            }

            return offerObj;  // Devuelve el objeto de la oferta procesada
        });

        console.log('Found job offers:', processedJobOffers.length);  // Muestra el total de ofertas encontradas

        // Renderiza la vista de ofertas de trabajo con las ofertas procesadas y la palabra clave usada
        res.render('jobOffers', { jobOffers: processedJobOffers, keyword });
    } catch (error) {
        console.error('Error al buscar ofertas de trabajo:', error);  // Muestra el error en consola si ocurre
        res.status(500).render('error', { message: 'Error al buscar ofertas de trabajo' });  // Renderiza la página de error
    }
};


// READ
const getOffers = async (req, res) => {
    try {
        const keyword = req.query.keyword || '';

        // Ensure only to proceed if a keyword is provided
        const jobOffers = keyword
            ? await jobOfferModel.find({
                $or: [
                    { puesto:  { $regex: `.*${keyword}.*`, $options: 'i' } },
                    { empresa: { $regex: `.*${keyword}.*`, $options: 'i' }},
                    { descripcion: { $regex: `.*${keyword}.*`, $options: 'i' }},
                    { modalidad:  { $regex: `.*${keyword}.*`, $options: 'i' } },
                    { requisitos: { $regex: `.*${keyword}.*`, $options: 'i' }},
                    { salario: { $regex: `.*${keyword}.*`, $options: 'i' }}
                ],
            })
            : []; // Return empty array if no keyword is provided

            res.render('jobOffers', { jobOffers });
    } catch (error) {
        res.status(500).json({ error: 'Error al buscar ofertas de trabajo' });
    }
};

// UPDATE
const editOffer = async (req, res) => {
    try {
        const ofertaActualizada = await JobOffer.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (ofertaActualizada) {
            res.redirect('/joboffers/create');
        } else {
            res.status(404).send('Oferta no encontrada');
        }
    } catch (error) {
        res.status(500).send('Error al actualizar la oferta');
    }
};

// DELETE
const deleteOffer = async (req, res) => {
    try {
        const oferta = await JobOffer.findByIdAndDelete(req.params.id);
        if (oferta) {
            res.redirect('/joboffers/create');
        } else {
            res.status(404).send('Oferta no encontrada');
        }
    } catch (error) {
        res.status(500).send('Error al eliminar la oferta');
    }
};

module.exports = {
    createOffer,
    getOffers,
    editOffer,
    deleteOffer,
    scrapOffers
};