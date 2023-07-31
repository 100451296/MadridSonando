import bcrypt from 'bcryptjs'
import LocalStrategy  from "passport-local"
import userModel from "../../models/userModel.js";


// REGISTER STRATEGY
const registerStrategy = new LocalStrategy({
    usernameField: 'email',
    passwordField: 'contraseña',
    passReqToCallback: true
  }, async (req, email, password, done) => {
    try {
        const passwordHash = await bcrypt.hash(req.body.contraseña, 10);
        const user = {
            nombre: req.body.nombre, 
            contraseña: passwordHash, 
            direccion: req.body.direccion,
            email: req.body.email
        }
        
        // Crear el usuario en la base de datos
        const userId = await userModel.createUser(user);
        
        user.id = userId;
        return done(null, user);
    }
    catch(err) {
        console.error(err);
        return done(err)
    }
    
});

export default registerStrategy


