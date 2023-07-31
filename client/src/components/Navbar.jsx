import AuthButton from "./AuthButton";
import BorderButton from "./BorderButton";
import Button from "./Button";
import { useState } from "react";

function Navbar() {
  let services = [
    { name: "Sonido", link: "/sonido" },
    { name: "Audiovisual", link: "/audiovisual" },
    { name: "Marketing", link: "/marketing" },
    { name: "Moda", link: "/moda" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <div className="w-full shadow-lg shadow-gray-800/40 fixed top-0 left-0">
      <div className="lg:flex items-center justify-between bg-black py-4 lg:px-9 px-8">
        <div className="font-bold text-2xl cursor-pointer flex items-center">
          <span className="text-3xl text-indigo-50 mr-3 pt-1">
            <ion-icon name="play-circle-outline"></ion-icon>
          </span>
          Madrid Sonando
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-4xl absolute right-8 top-6 cursor-pointer lg:hidden"
        >
          <ion-icon name={open ? "close-outline" : "menu-outline"}></ion-icon>
        </div>

        <div
          className={`lg:flex  lg:space-x-50 lg:static absolute bg-black lg:z-auto z-[-1] left-0 
        w-full lg:w-auto lg:pl-0 pl-9 lg:pb-0 pb-6 transition-all ease-in ${
          open ? "top-19 opacity-100" : "top-[-490px] "
        }  lg:opacity-100 opacity-0`}
        >
          <ul className="lg:flex lg:items-center">
            {services.map((service) => (
              <li key={service.name} className="lg:ml-8 text-xl lg:my-0 my-5">
                <a
                  href={service.link}
                  className="text-gray-400 hover:text-gray-50"
                >
                  {service.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center space-x-3">
            <Button>Inicia Sesion</Button>
            <BorderButton>Registrate</BorderButton>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
