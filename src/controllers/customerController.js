const { validationResult, body } = require('express-validator');
const controller = {};

const passport = require('passport');

// REGISTER 
controller.register = (req, res) => {
    res.render('registrate');
};
controller.manageRegister = (req, res) => {
    const errors = validationResult(req);

    console.log(req.body);
    if (!errors.isEmpty()) {
        // Si hay errores, renderiza la página del formulario nuevamente con los errores
        return res.render('registrate', { errors: errors.array() });
    }

    passport.authenticate('local.signup', {
        successRedirect: './perfil',
        failureRedirect: '/registrate'
    });

    /*
    req.getConnection((err, conn) => {
        if (err) {
            console.log(err);
            return;
        }
        
        conn.query('INSERT INTO usuarios SET ?', [req.body], (err, rows) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log(rows);
            // Redireccionar a la raíz '/'
            res.redirect('/');
        });
        
    });*/
    
    res.redirect('/');
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

controller.login = (req, res) => {
    res.render('inicia-sesion');
};


controller.home = (req, res) => {
    res.render('home');
}



module.exports = controller;