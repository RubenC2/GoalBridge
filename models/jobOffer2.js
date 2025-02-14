const mongoose = require("mongoose");
require("../config/db.mongo"); // Conexión a BBDD MongoDB

const objectSchema = {
    puesto: {
        type: String,
        required: true,
        
    },
    empresa: {
        type: String,
        required: true,
    },
    salario: {
        type: String,
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
    },
    modalidad: {
        type: String,
        required: true,
    },
    requisitos: {
        type: String,
        required: true,
    },
};
//Modelo de objeto
// {
//     "puesto":"Desarrollador web FullStack",
//     "empresa":"The Bridge",
//     "salario":"20.000-30.000",
//     "descripcion":"Buscamos un Desarrollador Full Stack con experiencia en PHP,JavaScript, SQL y CSS, responsable de desarrollar soluciones completas, desde la toma de requisitos hasta la implementación final.Este rol requiere una fuerte capacidad analítica y habilidad para diseñar la arquitectura lógica y técnica de los proyectos. Si tienes un sólido conocimiento de estas tecnologías y experiencia en el diseño y desarrollo de aplicaciones web escalables, ¡queremos conocerte!" ,
//     "modalidad":"100% Remoto" ,
//     "requisitos":"Experiencia comprobada en desarrollo PHP y JavaScript.-Conocimientos avanzados en SQL para el diseño y optimización de consultas.-Experiencia en CSS para la maquetación y diseño responsivo.-Habilidad para el análisis y la toma de requisitos.-Experiencia en el diseño de arquitectura lógica de aplicaciones, integrando backend (PHP/SQL) y frontend (JavaScript/CSS)."
// }

// Crear el esquema
const productSchema = mongoose.Schema(objectSchema);

// Crear el modelo --> Colección
const offers = mongoose.model("offers", productSchema);

module.exports = offers;