// passportConfig.js
import passport from "passport";
import registerStrategy from "./strategies/registerStrategy.js";
import loginStrategy from "./strategies/loginStrategy.js";
import userModel from "../models/userModel.js";

// USE STRATEGIES
passport.use("register", registerStrategy);
passport.use("login", loginStrategy);


// SERIALIZE
passport.serializeUser((user, done) => {
  // Almacenar solo el ID del usuario en la sesión
  done(null, user.id);
});

// DESERIALIZE
passport.deserializeUser(async (id, done) => {
  try {
    // Recuperar los datos del usuario utilizando el ID almacenado en la sesión
    const user = await userModel.getUserById(id);

    if (!user) {
      return done(null, false); // El usuario no fue encontrado
    }

    return done(null, user);
  } catch (err) {
    console.error(err);
    return done(err);
  }
});

export default passport;
