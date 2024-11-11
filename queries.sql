
CREATE DATABASE auth_db;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    role VARCHAR(10) DEFAULT 'user' CHECK (role IN ('admin', 'user'))
);

CREATE TABLE user_favs (
    userID INT,
    favID INT,
    PRIMARY KEY (userID, favID),
    FOREIGN KEY (userID) REFERENCES Users(id),
    FOREIGN KEY (favID) REFERENCES Favoritos(id)
);