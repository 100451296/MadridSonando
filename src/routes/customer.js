const express = require('express');
const router = express.Router();
const controller = require('../controllers/customerController');

router.get('/', controller.home);
router.get('/registrarse', controller.register);


router.post('/add', controller.save);


module.exports = router;