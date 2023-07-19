const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const app = express();

// importing routes
const customerRoutes = require('./routes/customer');

// Settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: 'contraseña',
    port: 3306,
    databse: 'MadridSonando'
}, 'single'));

// Routes
app.use('/', customerRoutes);

// Static Files
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
    console.log('Server on port 3000')
});



