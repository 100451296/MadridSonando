import BorderButton from "./BorderButton";
import Button from "./Button";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

function Navbar() {
  let services = [
    { name: "Sonido", link: "/sonido" },
    { name: "Audiovisual", link: "/audiovisual" },
    { name: "Marketing", link: "/marketing" },
    { name: "Moda", link: "/moda" },
  ];
  let [open, setOpen] = useState(false);
  let { user } = useAuth();

  return (
    <div
      id="navbar"
      className="w-full shadow-lg shadow-gray-900/40 sticky top-0 left-0 z-50"
    >
      <div className="lg:flex items-center justify-between bg-gray-800 py-6 lg:px-9 px-8">
        <a
          href="/
        "
        >
          <div className="font-bold text-2xl cursor-pointer flex items-center">
            <span className="text-4xl text-indigo-50 mr-3 pt-1">
              <ion-icon name="play-circle-outline"></ion-icon>
            </span>
            Madrid Sonando
          </div>
        </a>

        <div
          onClick={() => setOpen(!open)}
          className="text-4xl absolute right-8 top-6 cursor-pointer lg:hidden"
        >
          <ion-icon name={open ? "close-outline" : "menu-outline"}></ion-icon>
        </div>

        <div
          className={`lg:flex  lg:space-x-50 lg:static absolute bg-gray-800 lg:z-auto z-[-1] left-0 
        w-full lg:w-auto lg:pl-0 pl-9 lg:pb-0 pb-6 transition-all ease-in ${
          open ? "top-19 opacity-100" : "top-[-490px] "
        }  lg:opacity-100 opacity-0`}
        >
          <ul className="lg:flex lg:items-center">
            {services.map((service) => (
              <li key={service.name} className="lg:ml-8 text-xl lg:my-0 my-5">
                <Link
                  to={service.link}
                  className="text-gray-400 hover:text-gray-50"
                >
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center space-x-3">
            {user ? (
              // Si el usuario existe, muestra el botón de perfil
              <Button link="/profile" profile="true">
                {user.nombre}
              </Button>
            ) : (
              // Si el usuario no existe, muestra los botones de inicio de sesión y registro
              <>
                <Button link="/login">Inicia Sesion</Button>
                <BorderButton link="/register">Registrate</BorderButton>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
