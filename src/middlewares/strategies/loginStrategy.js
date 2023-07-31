import passport from "passport";
import bcrypt from "bcryptjs";
import LocalStrategy from "passport-local";
import userModel from "../../models/userModel.js";

// REGISTER STRATEGY
const loginStrategy = new LocalStrategy(
  {
    usernameField: "email",
    passwordField: "contraseña"
  },
  async (email, password, done) => {
    console.log('Incio LoginStrategy');
    try {
      const user = await userModel.getUserByEmail(email);
      if (!user || !(await bcrypt.compare(password, user.contraseña))) {
        return done(null, false);
      }
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  }
);

export default loginStrategy;
