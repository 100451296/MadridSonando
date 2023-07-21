const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const passport = require('passport');
const session = require('express-session');
const MySQLStore = require('express-mysql-session');
const flash = require('connect-flash');
const  database = require('./keys');

const app = express();

// Initizalizaions 
const customerRoutes = require('./routes/customer');
require('./controllers/managePassport');

// Settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
const sessionStore = new MySQLStore({
    host: 'localhost',          // Dirección del servidor de la base de datos MySQL
    user: 'root',               // Usuario de la base de datos
    password: 'contraseña',     // Contraseña del usuario de la base de datos
    port: 3306,                 // Puerto de la base de datos
    database: 'MadridSonando',  // Nombre de la base de datos

    clearExpired: true,        // Eliminar automáticamente las sesiones expiradas
    checkExpirationInterval: 900000, // Intervalo para comprobar sesiones expiradas (15 minutos)

    expiration: 86400000,      // Tiempo de expiración de la sesión en milisegundos (1 día)

    createDatabaseTable: true, // Crear automáticamente la tabla 'sessions' en la base de datos

    connectionLimit: 1,        // Límite de conexiones simultáneas con la base de datos

    endConnectionOnClose: true, // Cerrar la conexión con la base de datos cuando se cierra la sesión

    charset: 'utf8mb4_bin',     // Conjunto de caracteres de la base de datos

    schema: {
        tableName: 'sessions',  // Nombre de la tabla donde se almacenarán las sesiones
        columnNames: {
            session_id: 'session_id', // Nombre de la columna para el ID de sesión
            expires: 'expires',       // Nombre de la columna para el tiempo de expiración
            data: 'data'              // Nombre de la columna para los datos de sesión
        }
    }
});

// Middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, database, 'single'));
app.use(express.urlencoded({extended: false})) // Añade el campo body a las req
app.use(session({
    secret: 'eledunavataadfsadfasdfasdfsdf',
    resave: true,
    saveUninitialized: true,
    store: sessionStore
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// Global variables
app.use((req, res, next) => {
    res.locals.messages = req.flash();
    res.locals.user = req.user; // Establecer la variable "user" en la respuesta local
    next();
});


// Routes
app.use('/', customerRoutes);

// Static Files
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
    console.log('Server on port 3000')
});


