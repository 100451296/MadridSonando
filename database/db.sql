-- Create database
CREATE DATABASE MadridSonando;

-- Using database
use MadridSonando;

-- Borra la tabla si ya existe
DROP TABLE IF EXISTS usuarios;

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    email VARCHAR(20) NOT NULL,
    direccion VARCHAR(255) NOT NULL,
    contraseña VARCHAR(100) NOT NULL
);


-- to show tables
SHOW TABLES;

-- to see the columns of table
describe usuarios;