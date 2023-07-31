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

-- Borra la tabla si ya existe
DROP TABLE IF EXISTS productos;
CREATE TABLE productos (
  id INT PRIMARY KEY AUTO_INCREMENT,
  ProductName VARCHAR(255),
  Brand VARCHAR(50),
  Price DECIMAL(10, 2),
  DiscountPrice DECIMAL(10, 2),
  Image_Url VARCHAR(455),
  Quantity INT,
  Category VARCHAR(50),
  SubCategory VARCHAR(50),
  Absolute_Url VARCHAR(455),
  Uds VARCHAR(15)
);

-- Borra la tabla si ya existe
DROP TABLE IF EXISTS Servicios;
CREATE TABLE Servicios (
  id INT PRIMARY KEY AUTO_INCREMENT,
  ServiceName VARCHAR(50)
);

-- Borra la tabla si ya existe
DROP TABLE IF EXISTS Planes;
-- Crea la tabla "plan" con clave foránea hacia "servicios"
CREATE TABLE Planes (
  id INT PRIMARY KEY AUTO_INCREMENT,
  ServiceID INT,
  Price DECIMAL(10, 2),
  Description VARCHAR(100),
  Name VARCHAR(50),
  FOREIGN KEY (ServiceID) REFERENCES Servicios(id)
);

-- Borra la tabla si ya existe
DROP TABLE IF EXISTS compras;
CREATE TABLE compras (
  id INT PRIMARY KEY AUTO_INCREMENT,
  usuario_id INT,
  fecha_compra DATE,
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

-- Borra la tabla si ya existe
DROP TABLE IF EXISTS compras_planes;
CREATE TABLE compras_planes (
  compra_id INT,
  plan_id INT,
  cantidad INT,
  -- Otros campos específicos de la relación compra-planes
  FOREIGN KEY (compra_id) REFERENCES compras(id),
  FOREIGN KEY (plan_id) REFERENCES planes(id)
);

-- Borra la tabla si ya existe
DROP TABLE IF EXISTS compras_productos;
CREATE TABLE compras_productos (
  compra_id INT,
  producto_id INT,
  cantidad INT,
  -- Otros campos específicos de la relación compra-productos
  FOREIGN KEY (compra_id) REFERENCES compras(id),
  FOREIGN KEY (producto_id) REFERENCES productos(id)
);

-- Borra la tabla si ya existe
DROP TABLE IF EXISTS citas;
CREATE TABLE citas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    UserId INT,
    ServiceID INT,
  -- Otros campos específicos de la relación compra-productos
  FOREIGN KEY (UserId) REFERENCES usuarios(id),
  FOREIGN KEY (ServiceID) REFERENCES servicios(id)
);

LOAD DATA LOCAL INFILE '/output.csv'
INTO TABLE productos
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 LINES;

-- to show tables
SHOW TABLES;

-- to see the columns of table
describe usuarios;