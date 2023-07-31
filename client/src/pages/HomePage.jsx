import { useState, useEffect } from "react";

export default function HomePage() {
  const [displayText, setDisplayText] = useState("");
  const [animationStarted, setAnimationStarted] = useState(false);
  const textToWrite = "Madrid Sonando";
  const typingDelay = 100; // Delay entre caracteres (en milisegundos)

  useEffect(() => {
    let charIndex = 0;
    let animationTimer;

    function typeNextCharacter() {
      if (!animationStarted) {
        if (charIndex < textToWrite.length - 1) {
          setDisplayText((prevText) => prevText + textToWrite[charIndex]);
          charIndex++;
          animationTimer = setTimeout(typeNextCharacter, typingDelay);
        } else {
          clearTimeout(animationTimer);
          setAnimationStarted(true);
        }
      }
    }

    typeNextCharacter();

    return () => clearTimeout(animationTimer);
  }, [animationStarted]);

  return (
    
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-700 text-4xl relative">
      <div className="w-full">
        <div className="relative w-full h-full">
          <img
            src="./public/dj.png"
            alt="Background"
            className="object-cover w-full h-full opacity-90 blur-sm"
          />
          <div className="absolute top-1/3 text-center w-full">
            <div className="inline-block bg-black bg-opacity-40 rounded-full p-8 shadow-2xl">
              <h1
                id="brandName"
                className="text-white font-bold text-8xl subpixel-antialiased"
              >
                {displayText}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-gray-200 text-black p-20 flex flex-col justify-center items-center">
        <div className="w-max-w3">
          <h1 className="text-4xl font-bold mb-10">
            Todos nuestros servicios.
          </h1>
          <div className="mb-8 bg-white p-6 rounded-lg shadow-2xl">
            <h2 className="text-2xl font-bold mb-2">
              Sonido: Grabación de Canciones
            </h2>
            <div className="flex items-center text space-x-7">
              <div className="flex justify-center bg-black rounded-full text-white text-6xl p-3">
                <ion-icon name="mic-outline"></ion-icon>
              </div>
              <p className="text-3xl">
                Ofrecemos servicios de grabación de alta calidad para ayudarte a
                materializar tu música y darle vida a tus composiciones.
              </p>
            </div>
          </div>
          <div className="mb-8 bg-white p-6 rounded-lg shadow-2xl">
            <h2 className="text-2xl font-bold mb-2">Audiovisual: Videoclip</h2>
            <div className="flex items-center space-x-7">
              <div className="flex justify-center bg-black rounded-full text-white text-6xl p-3">
                <ion-icon name="videocam-outline"></ion-icon>
              </div>
              <p className="text-3xl">
                Crea impactantes videoclips que complementen tu música y te
                permitan llegar a más seguidores a través de una presentación
                visual única.
              </p>
            </div>
          </div>
          <div className="mb-8 bg-white p-6 rounded-lg shadow-2xl">
            <h2 className="text-2xl font-bold mb-2">
              Marketing: Publicidad para Ganar Fama
            </h2>
            <div className="flex items-center space-x-7">
              <div className="flex justify-center bg-black rounded-full text-white text-6xl p-3">
                <ion-icon name="megaphone-outline"></ion-icon>
              </div>
              <p className="text-3xl">
                Construye tu presencia en el mercado musical y gana notoriedad a
                través de estrategias de marketing efectivas y campañas
                publicitarias personalizadas.
              </p>
            </div>
          </div>
          <div className="mb-8 bg-white p-6 rounded-lg shadow-2xl">
            <h2 className="text-2xl font-bold mb-2">
              Moda: Venta Propia de Ropa
            </h2>
            <div className="flex items-center space-x-7">
              <div className="flex justify-center bg-black rounded-full text-white text-6xl p-3">
                <ion-icon name="shirt-outline"></ion-icon>
              </div>
              <p className="text-3xl">
                Explora tu estilo personal y crea tu línea de ropa exclusiva,
                expresando tu identidad artística y conectando con tus
                seguidores a través de la moda.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
