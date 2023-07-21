const express = require('express');
const router = express.Router();
const controller = require('../controllers/customerController');
const middlewares = require('../controllers/middlewares');
const csrf = require('csurf');
const bodyParser = require('body-parser');

const csrfProtection = csrf({ cookie: true });
const parseForm = bodyParser.urlencoded({ extended: false });

router.get('/', controller.home);

// SIGNUP & LOGIN
router.get('/registrarse', middlewares.preventAccessIfAuthenticated('/perfil'), csrfProtection, controller.register);
router.get('/inicia-sesion', middlewares.preventAccessIfAuthenticated('/perfil'), csrfProtection, controller.login);

router.get('/sonido', controller.sound);
router.get('/audiovisual', controller.audiovisual);
router.get('/marketing', controller.marketing);
router.get('/moda', controller.fashion);

// NECESSARY LOGIN
router.get('/perfil', middlewares.requireAuthentication('/inicia-sesion'), controller.profile);
router.get('/logout', middlewares.requireAuthentication('/inicia-sesion'),controller.logout);

router.post('/add', parseForm, csrfProtection, controller.manageRegister);
router.post('/login', parseForm, csrfProtection, controller.manageLogin);


module.exports = router;