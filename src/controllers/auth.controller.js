import passport from "../middlewares/passportConfig.js";

export const register = (req, res, next) => {
  passport.authenticate("register", (err, user, info) => {
    try {
      if (err || !user) {
        return res.status(401).json({ message: "Error al registrar" });
      }
      // Autenticación exitosa
      req.login(user, (err) => {
        if (err) {
          console.error(err);
          return res.send(500).json({ message: "Error al registrar" });
        }
        return res.send(user);
      });
    } catch (error) {
      console.error(err);
      return res.send(500).json({ message: "Error al registrar" });
    }
  })(req, res, next);
};

export const login = (req, res, next) => {
  passport.authenticate("login", (err, user, info) => {
    if (err || !user) {
      return res.status(401).json({ message: "Error al inicar sesion" });
    }
    // Autenticación exitosa
    req.login(user, (err) => {
      if (err) {
        return res.send(500);
      }
      return res.send(user);
    });
  })(req, res, next);
};

export const logout = (req, res) => {
  req.logout((err) => {
    if (err) {
      // Manejar el error, si es necesario
      console.error("Error al cerrar sesión:", err);
      return res.satus(500).json({ message: "Error en logout" }); // O redireccionar a una página de error
    }
    console.log(req.isAuthenticated());
    //return res.json({ message: 'Logout successful' });
    return res.json({ message: "Logout successful" });
  });
};

export const getAuthenticated = (req, res) => {
  try {
    const { email, nombre, direccion }  = req.user.email;
    if (req.isAuthenticated()) {
      res.status(200).json({ email, nombre, direccion });
    } else {
      res.status(401).json({ error: "No Authenticated" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
    console.error(error);
  }
};
