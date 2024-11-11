CREATE TABLE user2 (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    role VARCHAR(50) DEFAULT 'user'
);

CREATE TABLE user_favs (
    userID INT,
    favID INT,
    PRIMARY KEY (userID, favID),
    FOREIGN KEY (userID) REFERENCES Users(id),
    FOREIGN KEY (favID) REFERENCES Favoritos(id)
);