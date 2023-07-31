import express from 'express'
import morgan from 'morgan'
import session from 'express-session'
import MySQLStoreFactory from 'express-mysql-session';
import cookieParser from 'cookie-parser';
import { helmetSecurity } from './middlewares/customHelmet.js';
import passport from 'passport';
import './middlewares/passportConfig.js';
import mainRouter from './routes/main.routes.js';
import config from './config.js'
import fs from "fs";
import path, { dirname, join } from 'path';
import https from "https";
import cors from "cors";

// Obtener la ruta actual del archivo
const currentFilePath = new URL(import.meta.url).pathname;

// Obtener la ruta de la carpeta "certificados"
const certificadosPath = join(dirname(currentFilePath), 'credentials');

// Cargar el certificado y la clave privada
const privateKey = fs.readFileSync(join(certificadosPath, 'clave-privada.key'), 'utf8');
const certificate = fs.readFileSync(join(certificadosPath, 'certificado.crt'), 'utf8');
const credentials = { key: privateKey, cert: certificate };



const app = express()

// SETTINGS 
const MySQLStore = MySQLStoreFactory(session);
const sessionStore = new MySQLStore(config.storeConfig);


// MIDDLEWARES 
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser());
app.use(session(config.sesionConfig));
app.use(passport.initialize());
app.use(passport.session());
app.use(helmetSecurity);

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true, // Permite enviar cookies
}));


// ROUTES
app.use("/api", mainRouter)

// Crear el servidor HTTPS
//const httpsServer = https.createServer(credentials, app);
const httpsServer = app;

export default httpsServer
