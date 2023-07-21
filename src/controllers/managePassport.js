const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const encrypt = require('./encrypt');
const database = require('../database');
const validator = require('validator');

// REGISTER STRATEGY
passport.use('local.signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'contraseña',
    passReqToCallback: true
  }, async (req, email, password, done) => {
    console.log("hooola",req.body);
    const { nombre, direccion, contraseña, contraseña2 } = req.body;
  
    try {
        // Comprobar si los campos requeridos están vacíos
        if (!email || !nombre || !direccion || !contraseña || !contraseña2) {
            req.flash('error', 'Por favor, complete todos los campos.');
            return done(null, false);
        }

        // Comprobar si el email es válido
        if (!validator.isEmail(email)) {
            req.flash('error', 'Email no válido.');
            return done(null, false);
        }

        // Comprobar si las contraseñas coinciden
        if (contraseña !== contraseña2) {
            req.flash('error', 'Las contraseñas no coinciden.');
            return done(null, false);
        }

        // Comprobar si la contraseña cumple con los requisitos mínimos de seguridad (8 caracteres, 1 número y 1 letra)
        if (!validator.isStrongPassword(contraseña, { minLength: 8, minLowercase: 1, minUppercase: 0, minNumbers: 1, minSymbols: 0 })) {
            req.flash('error', 'La contraseña debe tener al menos 8 caracteres y contener al menos 1 número.');
            return done(null, false);
        }

        // Encriptar la contraseña antes de guardarla en la base de datos
        const hashedPassword = await encrypt.encrypt(password);

        let newUser = {
        nombre: nombre,
        email: email,
        contraseña: hashedPassword,
        direccion: direccion
        };

        // Resto del código para la inserción del nuevo usuario
        req.getConnection((err, conn) => {
        if (err) {
            console.error('Error al obtener la conexión:', err);
            req.flash('error', 'Error al obtener la conexión a la base de datos.');
            return done(err);
        }

        // Comprobar si el usuario ya existe por su email
        conn.query('SELECT * FROM usuarios WHERE email = ?', [email], (err, rows) => {
            if (err) {
            console.error('Error al buscar el usuario en la base de datos:', err);
            req.flash('error', 'Error al buscar el usuario en la base de datos.');
            return done(err);
            }

            if (rows.length > 0) {
            req.flash('error', 'El usuario con este email ya está registrado.');
            return done(null, false);
            }

            // Si el usuario no existe, insertarlo en la base de datos
            conn.query('INSERT INTO usuarios SET ?', [newUser], (err, result) => {
            if (err) {
                console.error('Error al insertar el nuevo usuario en la base de datos:', err);
                req.flash('error', 'Error al insertar el nuevo usuario en la base de datos.');
                return done(err);
            }

            newUser.id = result.insertId;
            // Redirigir al frontend con un mensaje de éxito
            req.flash('success', 'Usuario registrado con éxito.');
            return done(null, newUser);
            });
        });
        });
    } catch (err) {
      console.log("Error:", err);
      return done(err);
    }
}));

// LOGIN STRATEGY
passport.use('local.login', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'contraseña',
  passReqToCallback: true
}, async (req, email, password, done) => {
  try {

    // Comprobar si los campos requeridos están vacíos
    if (!email || !password) {
      req.flash('error', 'Por favor, complete todos los campos.');
      return done(null, false);
    }

    // Comprobar si el email es válido
    if (!validator.isEmail(email)) {
      req.flash('error', 'Email no válido.');
      return done(null, false);
    }

    // Resto del código para obtener el usuario de la base de datos por su email
    req.getConnection((err, conn) => {
      if (err) {
        console.error('Error al obtener la conexión:', err);
        req.flash('error', 'Error al obtener la conexión a la base de datos.');
        return done(err);
      }

      // Obtener el usuario de la base de datos por su email
      conn.query('SELECT * FROM usuarios WHERE email = ?', [email], async (err, rows) => {
        if (err) {
          console.error('Error al buscar el usuario en la base de datos:', err);
          req.flash('error', 'Error al buscar el usuario en la base de datos.');
          return done(err);
        }

        // Comprobar si el usuario existe
        if (rows.length === 0) {
          req.flash('error', 'Usuario no encontrado.');
          return done(null, false);
        }

        // Comprobar si la contraseña coincide utilizando helpers.matchPassword
        const user = rows[0];
        const isMatch = await encrypt.matchPassword(password, user.contraseña);
        if (!isMatch) {
          req.flash('error', 'Contraseña incorrecta.');
          return done(null, false);
        }

        // Si la contraseña coincide, se inicia sesión con éxito
        return done(null, user);
      });
    });
  } catch (err) {
    console.log("Error:", err);
    return done(err);
  }
}));

// SERIALIZE
passport.serializeUser( (user, done) => {
    done(null, user.id);
});

// DESERIALIZE
passport.deserializeUser(async (id, done) => {
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