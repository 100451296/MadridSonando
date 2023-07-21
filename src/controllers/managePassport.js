const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const encrypt = require('./encrypt');
const database = require('../database');


passport.use('local.signup', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'contraseña',
  passReqToCallback: true
}, async (req, email, password, done) => {
  const { nombre, direccion, contraseña } = req.body;
  
  try {

    // Encriptar la contraseña antes de guardarla en la base de datos
    const hashedPassword = await encrypt.encrypt(contraseña);

    let newUser = {
      nombre: nombre,
      email: email,
      contraseña: hashedPassword,
      direccion: direccion
    };

    req.getConnection((err, conn) => {
      if (err) {
        console.error('Error al obtener la conexión:', err);
        return done(err);
      }

      conn.query('INSERT INTO usuarios SET ?', [newUser], (err, result) => {
        if (err) {
          console.error('Error al insertar el nuevo usuario en la base de datos:', err);
          return done(err);
        }
        
        newUser.id = result.insertId;

        return done(null, newUser);
      });
    });
  } catch (err) {
    console.log("Error:", err);
    return done(err);
  }
}));

passport.serializeUser( (user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    console.log("Serializacion");
    try {
      const [rows, fields] = await database.query('SELECT * FROM usuarios WHERE id = ?', [id]);
      
      if (rows.length === 0) {
        return done(null, false); // El usuario no fue encontrado
      }
  
      const user = rows[0];

      return done(null, user);
    } catch (err) {
      return done(err);
    }
  });