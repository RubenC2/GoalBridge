# GoalBridge - Aplicación Web de Búsqueda de Ofertas de Trabajo

**https://goalbridge.onrender.com**

**GoalBridge** es una aplicación web que permite a los usuarios buscar y filtrar ofertas de trabajo en diversas categorías. La aplicación proporciona una interfaz fácil de usar para facilitar la búsqueda de oportunidades laborales relevantes. Además, utiliza bases de datos para almacenar y administrar las ofertas de trabajo y la información de los usuarios.

## Tabla de Contenidos
- [Características](#características)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Instalación y Ejecución](#instalación-y-ejecución)
- [Configuración de Base de Datos](#configuración-de-base-de-datos)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)

## Características

- **Búsqueda de Empleos:** Permite a los usuarios buscar empleos por palabra clave, ubicación, y categoría.
- **Filtrado Avanzado:** Los usuarios pueden filtrar las ofertas por salario, tipo de contrato, y más.
- **Interfaz Intuitiva:** La interfaz está diseñada para ser intuitiva y fácil de navegar.
- **Almacenamiento en Base de Datos:** Las ofertas de trabajo y la información de los usuarios se almacenan en MongoDB y PostgreSQL.
- **Despliegue en la Nube:** La base de datos SQL está desplegada en Render y MongoDB está en ATLAS, permitiendo un acceso seguro y confiable.

## Tecnologías Utilizadas

Este proyecto utiliza las siguientes tecnologías y herramientas:

- **Frontend:** HTML, CSS, JavaScript y DOM para la manipulación de la interfaz de usuario.
- **Motor de Plantillas:** PUG, para simplificar la generación de vistas HTML.
- **Bases de Datos:**
  - **MongoDB:** Utilizado para almacenar y gestionar los datos no relacionales de la aplicación, desplegado en ATLAS.
  - **PostgreSQL:** Base de datos relacional, desplegada en Render.
- **Control de Versiones:** Git y GitHub para gestionar el desarrollo y la colaboración del proyecto.

## Instalación y Ejecución

Sigue estos pasos para ejecutar el proyecto en tu entorno local:

1. **Clonar el Repositorio**
   ```bash
   git clone git@github.com:RubenC2/GoalBridge.git

2. **Instalar Dependencias Asegúrate de tener Node.js y npm instalados. Luego, instala las dependencias del proyecto:**
   ```bash
   npm install

3. **Inicia el proyecto**

   ```bash
   npm start

4. **Acceder a la Aplicación Abre tu navegador y ve a http://localhost:3000 para acceder a la aplicación.**


5. **Estructura del Proyecto**
   ```bash

   ├── public/             # Archivos estáticos (CSS, JS)
   ├── views/              # Vistas de la aplicación generadas con PUG
   ├── models/             # Modelos de base de datos
   ├── routes/             # Rutas de la aplicación
   ├── controllers/        # Lógica de negocio
   ├── .env                # Variables de entorno (no incluir en control de versiones)
   ├── app.js              # Archivo principal de la aplicación
   └── README.md           # Documentación del proyecto


Licencia
Este proyecto está bajo la Licencia MIT. Para más detalles, consulta el archivo LICENSE.
