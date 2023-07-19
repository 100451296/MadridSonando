const express = require('express');
const router = express.Router();
const controller = require('../controllers/customerController');

router.get('/', controller.home);
router.get('/registrarse', controller.register);
router.get('/sonido', controller.sound);
router.get('/audiovisual', controller.audiovisual);
router.get('/marketing', controller.marketing);
router.get('/moda', controller.fashion);

router.post('/add', controller.save);


module.exports = router;