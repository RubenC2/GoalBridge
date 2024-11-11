
CREATE DATABASE auth_db;


CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    nonmbre VARCHAR(50) NOT NULL,
    apellidos VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(10) DEFAULT 'user' CHECK (role IN ('admin', 'user'))
);

CREATE TABLE favoritos (
    id SERIAL PRIMARY KEY,
    puesto VARCHAR(50) NOT NULL,
    empresa VARCHAR(50) NOT NULL,
    salario VARCHAR(100) NOT NULL,
    descripcion VARCHAR(255) NOT NULL,
    modalidad VARCHAR(50) NOT NULL,
    requisitos VARCHAR(255)
);

CREATE TABLE user_favs (
    userID INT,
    favID INT,
    PRIMARY KEY (userID, favID),
    FOREIGN KEY (userID) REFERENCES users(id),
    FOREIGN KEY (favID) REFERENCES favoritos(id)
);

