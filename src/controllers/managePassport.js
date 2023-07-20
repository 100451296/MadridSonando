const passport = require('passport');
const LocalStrategy = require('passport-local');

passport.use('local.signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'contraseña',
    passReqToCallback: true
}, async (req, res, done) => {
    console.log(req.body);

}));


/*
passport.serializeUser( (usr, done) => {

});
*/