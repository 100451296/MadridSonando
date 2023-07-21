const { validationResult, body } = require('express-validator');
const controller = {};

const passport = require('passport');

// REGISTER 
controller.register = (req, res) => {
    res.render('registrate');
};
controller.manageRegister = passport.authenticate('local.signup', {
    successRedirect: '/perfil',
    failureRedirect: '/registrarse'
});

// LOGIN
controller.login = (req, res) => {
    res.render('inicia-sesion');
};
controller.manageLogin = passport.authenticate('local.login', {
    successRedirect: '/perfil',
    failureRedirect: '/inicia-sesion'
});

controller.logout = (req, res) => {
    req.logout((err) => {
      if (err) {
        // Manejar el error, si es necesario
        console.error('Error al cerrar sesión:', err);
        return res.redirect('/'); // O redireccionar a una página de error
      }
  
      res.redirect('/');
    });
  };
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




controller.home = (req, res) => {
    res.render('home');
}



module.exports = controller;