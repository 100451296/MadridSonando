const { validationResult, body } = require('express-validator');
const controller = {};

const passport = require('passport');

// REGISTER 
controller.register = (req, res) => {
    res.render('registrate');
};
controller.manageRegister = passport.authenticate('local.signup', {
    successRedirect: './perfil',
    failureRedirect: '/registrate'
});

controller.profile = (req, res) => {
    res.render('perfil');
}

controller.sound = (req, res) => {
    res.render('sonido');
};
controller.audiovisual = (req, res) => {
    res.render('audiovisual');
};

controller.marketing = (req, res) => {
    res.render('marketing');
};

controller.fashion = (req, res) => {
    res.render('moda');
};

controller.sound = (req, res) => {
    res.render('sonido');
};

controller.login = (req, res) => {
    res.render('inicia-sesion');
};


controller.home = (req, res) => {
    res.render('home');
}



module.exports = controller;