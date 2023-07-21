const express = require('express');
const router = express.Router();
const controller = require('../controllers/customerController');
const middlewares = require('../controllers/middlewares')

router.get('/', controller.home);

// SIGNUP & LOGIN
router.get('/registrarse', middlewares.preventAccessIfAuthenticated('/perfil'), controller.register);
router.get('/inicia-sesion', middlewares.preventAccessIfAuthenticated('/perfil'),controller.login);

router.get('/sonido', controller.sound);
router.get('/audiovisual', controller.audiovisual);
router.get('/marketing', controller.marketing);
router.get('/moda', controller.fashion);

// NECESSARY LOGIN
router.get('/perfil', middlewares.requireAuthentication('/inicia-sesion'), controller.profile);
router.get('/logout', middlewares.requireAuthentication('/inicia-sesion'),controller.logout);

router.post('/add', controller.manageRegister);
router.post('/login', controller.manageLogin);


module.exports = router;