$(document).ready(function() {
    // Obtenemos la ruta de la página actual
    var path = window.location.pathname;
  
    // Iteramos a través de los elementos <a> dentro de la barra de navegación
    $('.navbar-nav a.nav-link').each(function() {
      var href = $(this).attr('href');
      
      // Comparamos la ruta de la página actual con la ruta de cada enlace de la barra de navegación
      if (path === href) {
        // Primero, eliminamos la clase "active" de todos los enlaces
        $('.navbar-nav a.nav-link').removeClass('active');
        
        // Luego, agregamos la clase "active" al enlace que coincide con la página actual
        $(this).addClass('active');
      }
    });
  });
  