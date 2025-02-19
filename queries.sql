
CREATE DATABASE auth_db;


CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellidos VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    rol VARCHAR(10) DEFAULT 'user' CHECK (rol IN ('admin', 'user'))
);


-- CREATE TABLE user_favs (
--     userID INT,
--     favID INT,
--     FOREIGN KEY (userID) REFERENCES users(id),
-- );

CREATE TABLE favorites (
    users_id INT NOT NULL,
    offers_id VARCHAR(24) NOT NULL,
    added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (users_id, offers_id)
);



INSERT INTO users (nombre, apellidos, email, password, rol) VALUES 
  ('Juan',  'González', 'juanexample@gmail.com', '123456', 'admin'),
  ('Ana', 'Tellez', 'anaexample@gmail.com', '123456', 'user')

INSERT INTO favorites ("users_id", "offers_id")
VALUES (1, '67323c870cfcb42ae67e8167');