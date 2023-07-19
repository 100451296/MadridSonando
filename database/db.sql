-- Create database
CREATE DATABASE MadridSonando;

-- Using database
use MadridSonando;

-- Create tables
CREATE TABLE usuarios (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    direccion VARCHAR(50),
    perfil VARCHAR(30),
    telefono VARCHAR(15)
);


-- to show tables
SHOW TABLES;

-- to see the columns of table
describe usuarios;