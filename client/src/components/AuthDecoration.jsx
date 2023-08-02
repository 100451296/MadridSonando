/* eslint-disable react/prop-types */
import { useEffect } from 'react';

export default function AuthDecoration({ children }) {
  // Función para alternar la clase 'animate-bounce-slow'
  function toggleBounceClass() {
    const element = document.getElementById('interactive-element');
    element.classList.toggle('animate-bounce-slow');
  }

  // Efecto de montaje para iniciar la animación inicial y configurar la repetición cada 5 segundos
  useEffect(() => {
    toggleBounceClass();
    const interval = setInterval(toggleBounceClass, 2000);

    // Función de limpieza para evitar fugas de memoria
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hidden w-4/6 lg:flex bg-gray-800 items-center shadow-2xl shadow-gray-500/50 justify-center rounded-xl relative">
      {/* Agregar la imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <img
          src="./public/formImage.jpg"
          alt="Background"
          className="object-cover w-full h-full opacity-80 blur-lg"
        />
      </div>
      <div
        id="interactive-element"
        className="w-60 h-60 bg-cyan-500 shadow-lg shadow-cyan-500/50 rounded-full flex items-center justify-center 
      text-9xl relative hover:animate-spin"
      >
        {children}
      </div>
    </div>
  );
}
