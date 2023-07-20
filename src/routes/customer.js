const express = require('express');
const router = express.Router();
const controller = require('../controllers/customerController');

router.get('/', controller.home);
router.get('/registrarse', controller.register);
router.get('/sonido', controller.sound);
router.get('/audiovisual', controller.audiovisual);
router.get('/marketing', controller.marketing);
router.get('/moda', controller.fashion);
router.get('/inicia-sesion', controller.login);
router.get('/perfil', controller.profile);

router.post('/add', controller.manageRegister);


module.exports = router;