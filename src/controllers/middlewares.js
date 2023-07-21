const csurf = require('csurf');

const middlewares = {};

// Función middleware para verificar el token CSRF
middlewares.checkCSRF = (req, res, next) => {
  // Verificar el token CSRF antes de continuar
  if (req.method === 'POST' || req.method === 'PUT' || req.method === 'DELETE') {
    // Comprobar el token CSRF solo para solicitudes POST, PUT y DELETE
    if (req.body._csrf !== req.csrfToken()) {
      // El token CSRF no coincide, la solicitud es potencialmente un ataque CSRF
      return res.status(403).send('Solicitud no válida.');
    }
  }
  // El token CSRF es válido o la solicitud no es POST, PUT o DELETE, continuar
  next();
}

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