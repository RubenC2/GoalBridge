
# GoalBridge - Plataforma Inteligente de Búsqueda de Empleo

🌐 **[goalbridge.onrender.com](https://goalbridge.onrender.com)**

## Documentación

Puedes acceder a la documentación de esta API a traves de estos dos endpoints:

- **/api-jsdoc/**
- **/api-docs/**

**GoalBridge** es una aplicación web diseñada para facilitar la búsqueda de empleo de manera efectiva y rápida. Con una interfaz intuitiva y herramientas avanzadas de filtrado, GoalBridge ayuda a los usuarios a encontrar las oportunidades laborales que mejor se ajustan a su perfil y preferencias. La plataforma emplea bases de datos robustas para almacenar y gestionar las ofertas de empleo y la información del usuario, asegurando una experiencia de uso fluida y segura.

## 📑 Tabla de Contenidos
- [Características](#características)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Instalación y Ejecución](#instalación-y-ejecución)
- [Configuración de Base de Datos](#configuración-de-base-de-datos)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)

## 🚀 Características

- **🔍 Búsqueda Inteligente de Empleos:** Encuentra ofertas de trabajo según palabra clave, ubicación, y categoría.
- **🎛️ Filtrado Avanzado:** Personaliza los resultados mediante filtros por salario, tipo de contrato y otros criterios.
- **📱 Interfaz Amigable:** Diseño intuitivo y fácil de navegar, pensado para una experiencia de usuario óptima.
- **💾 Almacenamiento en Base de Datos:** Uso de **MongoDB** y **PostgreSQL** para almacenar datos de forma eficiente y escalable.
- **☁️ Despliegue en la Nube:** Con **MongoDB Atlas** y **Render** para almacenamiento seguro y accesible en la nube.

## 💻 Tecnologías Utilizadas

Este proyecto está construido con un stack moderno para garantizar rendimiento y escalabilidad:

- **Frontend:** HTML5, CSS3, JavaScript, y manipulación del DOM para una UI interactiva.
- **Motor de Plantillas:** Pug, facilitando la generación de vistas dinámicas en HTML.
- **Bases de Datos:**
  - **MongoDB Atlas:** Almacenamiento de datos no relacionales.
  - **PostgreSQL en Render:** Base de datos relacional para información estructurada.
- **Control de Versiones:** Git y GitHub para un flujo de trabajo eficiente y colaborativo.

## 🛠️ Instalación y Ejecución

Sigue estos pasos para configurar y ejecutar GoalBridge en tu entorno local:

1. **Clonar el Repositorio**
   ```bash
   git clone git@github.com:RubenC2/GoalBridge.git
   Instalar Dependencias
   
Asegúrate de tener Node.js y npm instalados. Luego, instala las dependencias del proyecto:

bash
Copiar código
npm install
Iniciar la Aplicación

bash
Copiar código
npm start
Acceder a GoalBridge
Abre tu navegador y ve a http://localhost:3000 para interactuar con la plataforma.

🗂️ Estructura del Proyecto
bash
Copiar código
├── public/             # Archivos estáticos (CSS, JS)
├── views/              # Vistas generadas con Pug
├── models/             # Modelos de base de datos
├── routes/             # Rutas de la aplicación
├── controllers/        # Lógica de negocio y controladores
├── .env                # Variables de entorno (no incluir en control de versiones)
├── app.js              # Archivo principal de la aplicación
└── README.md           # Documentación del proyecto
🤝 Contribuciones
¡Las contribuciones son bienvenidas! Si deseas colaborar en el proyecto, sigue estos pasos:

Haz un Fork del repositorio.
Crea una rama para tu característica: git checkout -b feature/nueva-funcionalidad.
Realiza tus cambios y confirma los commits: git commit -m 'Agrega nueva funcionalidad'.
Envía tu rama al repositorio: git push origin feature/nueva-funcionalidad.
Abre una Pull Request para revisión.
📜 Licencia
Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.

