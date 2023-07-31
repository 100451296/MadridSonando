import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import AuthButton from "../components/AuthButton";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup } = useAuth();
  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  return (
    <div className="flex h-screen bg-gray-200 justify-center px-5 lg:px-32 lg:py-10 mt-20 lg:mt-0">
      <div className="flex h-5/6 lg:h-5/6 bg-gray-900 shadow-2xl shadow-gray-500/50 rounded-2xl mt-10 lg:mt-5">
        <div className="flex h-full justify-between">
          <div className="hidden w-4/6 lg:flex bg-gray-800 items-center shadow-2xl shadow-gray-500/50 justify-center rounded-xl">
            <div className="w-60 h-60 bg-cyan-500 shadow-lg shadow-cyan-500/50 rounded-full flex items-center justify-center text-9xl hover:flex hover:animate-spin">
              <ion-icon name="play-circle-outline"></ion-icon>
            </div>
          </div>

          <form
            className="text-black bg-gray-100 py-10 px-5 lg:py-10 lg:px-14 rounded-xl w-full lg:w-2/3 shadow-2xl shadow-gray-500/50"
            onSubmit={onSubmit}
          >
            <h1 className="text-2xl lg:text-4xl mb-7 lg:mb-10 font-bold">
              Deja que el mundo te escuche.
            </h1>

            <label htmlFor="" className="text-xl font-light">
              Nombre
            </label>
            <input
              type="text"
              {...register("nombre", { required: true })}
              className="w-full  text-white px-4 py-4 rounded-full lg:rounded-md mb-4 mt-1"
              placeholder="Email"
            />

            <label htmlFor="" className="text-xl font-light">
              Email
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="w-full text-black px-4 py-4 rounded-full lg:rounded-md mb-4 mt-1 lg:mb-5"
              placeholder="Contraseña"
            />

            <label htmlFor="" className="text-xl font-light">
              Direccion
            </label>
            <input
              type="text"
              {...register("direccion", { required: true })}
              className="w-full text-black px-4 py-4 rounded-full lg:rounded-md mb-4 mt-1 lg:mb-5"
              placeholder="Contraseña"
            />

            <label htmlFor="" className="text-xl font-light">
              Contraseña
            </label>
            <input
              type="password"
              {...register("contraseña", { required: true })}
              className="w-full text-black px-4 py-4 rounded-full lg:rounded-md mb-12 mt-1 lg:mb-10"
              placeholder="Contraseña"
            />

            <AuthButton className="text-lg">Regístrate!</AuthButton>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
