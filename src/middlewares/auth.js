export const preventAccessIfAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    // Si el usuario está autenticado, redirigirlo a la página especificada en 'redirectTo'
    return res.status(401).json({ message: "Already authenticated." });
  }
  // Si el usuario no está autenticado, permitir el acceso a la ruta
  next();
};

export const requireAuthentication = (req, res, next) => {
  if (!req.isAuthenticated()) {
    // Si el usuario no está autenticado, redirigirlo a la página especificada en 'redirectTo'
    return res.status(401).json({ message: "Need to authenticate!" });
  }
  // Si el usuario está autenticado, permitir el acceso a la ruta
  next();
};
