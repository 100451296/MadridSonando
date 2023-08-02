import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";
import { ServiceCard } from "../components/ServiceCard";

export default function HomePage() {
  const words = [
    "     ",
    "Audio",
    "Videoclips",
    "Marketing",
    "Moda",
    "Deja que el mundo te escuche.",
  ];
  const [styleSubtitle, setStyleSub] = useState("text-white");
  const handleType = (count) => {
    // access word count number
    if (count % 6 === 5) {
      setStyleSub("text-cyan-200 font-bold");
    } else {
      setStyleSub("text-white");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-black text-4xl relative">
      <div className="flex w-full fondo items-center justify-center text-center ease-in duration-300">
        <div className="flex flex-col space-y-24">
          <div className="space-y-10 items-center ">
            <h1 className="text-cyan-400 text-7xl lg:text-8xl font-bold ">
              <Typewriter
                words={["Madrid Sonando"]}
                cursor
                cursorStyle=""
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h1>

            <h2 className={` text-2xl lg:text-3xl ${styleSubtitle}`}>
              <Typewriter
                words={words}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={40}
                deleteSpeed={50}
                delaySpeed={1000}
                onType={handleType}
              />
            </h2>
          </div>

          <div className="flex animate-bounce justify-center items-center text-6xl text-cyan-300">
            <ion-icon name="arrow-down-circle-outline"></ion-icon>
          </div>
        </div>
      </div>

      <div className="w-full bg-gray-200 text-black p-10 lg:p-20 flex flex-col justify-center items-center">
        <div className="">
          <h1 className="text-4xl font-bold mb-10">
            Todos nuestros servicios.
          </h1>

          <ServiceCard
            name="Sonido"
            description={
              "Ofrecemos servicios de grabación de alta calidad para ayudarte a materializar tu música y darle vida a tus composiciones."
            }
            minDescription={"Graba tus canciones"}
          >
            <ion-icon name="mic-outline"></ion-icon>
          </ServiceCard>

          <ServiceCard
            name="Audiovisual"
            description={
              "Crea impactantes videoclips que complementen tu música y te permitan llegar a más seguidores a través de una presentación visual única."
            }
            minDescription={"Crea videoclips"}
          >
            <ion-icon name="videocam-outline"></ion-icon>
          </ServiceCard>

          <ServiceCard
            name="Marketing"
            description={
              " Construye tu presencia en el mercado musical y gana notoriedad a través de estrategias de marketing efectivas y campañas publicitarias personalizadas."
            }
            minDescription={"Campañas publicitarias"}
          >
            <ion-icon name="analytics-outline"></ion-icon>
          </ServiceCard>

          <ServiceCard
            name="Moda"
            description={
              "Explora tu estilo personal y crea tu línea de ropa exclusiva, expresando tu identidad artística y conectando con tus seguidores a través de la moda."
            }
            minDescription={"Haz que tu estilo destaque"}
          >
           <ion-icon name="pricetag-outline"></ion-icon>
          </ServiceCard>
        </div>
      </div>
    </div>
  );
}
