const mysql = require('mysql2');

const databaseInfo = {
    host: 'localhost',
    user: 'root',
    password: 'contraseña',
    port: 3306,
    database: 'MadridSonando'
};

const pool = mysql.createPool(databaseInfo);

const database = pool.promise();

module.exports = database;
