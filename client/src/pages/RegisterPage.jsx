import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import AuthButton from "../components/AuthButton";
import AuthDecoration from "../components/AuthDecoration";

function RegisterPage() {
  const { register, handleSubmit } = useForm();
  const { signup } = useAuth();
  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  return (
    <section className="flex min-h-screen justify-center items-center bg-gray-200 px-2 lg:px-32 lg:py-0 ">
      <div className="bg-gray-900 shadow-2xl shadow-gray-500/50 rounded-2xl">
        <div className="flex justify-between">
          <AuthDecoration/>

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
              className="w-full px-4 py-4 rounded-full lg:rounded-md mb-4 mt-1"
              placeholder="Nombre"
            />

            <label htmlFor="" className="text-xl font-light">
              Email
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="w-full text-black px-4 py-4 rounded-full lg:rounded-md mb-4 mt-1 lg:mb-5"
              placeholder="Email"
            />

            <label htmlFor="" className="text-xl font-light">
              Direccion
            </label>
            <input
              type="text"
              {...register("direccion", { required: true })}
              className="w-full text-black px-4 py-4 rounded-full lg:rounded-md mb-4 mt-1 lg:mb-5"
              placeholder="Direccion"
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
    </section>
  );
}

export default RegisterPage;
