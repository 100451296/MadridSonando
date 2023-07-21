const middlewares = {};

// Definir un middleware personalizado para evitar acceso a las secciones de inicio/registro si el usuario está autenticado
middlewares.preventAccessIfAuthenticated = (redirectTo) => (req, res, next) => {
    if (req.isAuthenticated()) {
      // Si el usuario está autenticado, redirigirlo a la página especificada en 'redirectTo'
      return res.redirect(redirectTo);
    }
    // Si el usuario no está autenticado, permitir el acceso a la ruta
    next();
};

// Definir un middleware personalizado para restringir el acceso a ciertas rutas si el usuario no está autenticado
middlewares.requireAuthentication = (redirectTo) => (req, res, next) => {
  if (!req.isAuthenticated()) {
    // Si el usuario no está autenticado, redirigirlo a la página especificada en 'redirectTo'
    return res.redirect(redirectTo);
  }
  // Si el usuario está autenticado, permitir el acceso a la ruta
  next();
};

module.exports = middlewares;