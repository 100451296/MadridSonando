import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import AuthButton from "../components/AuthButton";

function LoginPage() {
  const { register, handleSubmit } = useForm();
  const { login } = useAuth();

  const onSubmit = handleSubmit(async (values) => {
    login(values);
  });

  return (
    <section className="flex h-screen bg-gray-200 justify-center p-2 lg:p-5 mt-20 lg:mt-0">
      <div className="flex h-3/6 lg:h-4/6 bg-gray-900 shadow-2xl shadow-gray-500/50 rounded-2xl mt-44 lg:mt-24">
        <div className="flex h-full justify-between">


          <div className="hidden w-4/6 lg:flex bg-gray-800 items-center shadow-2xl shadow-gray-500/50 justify-center rounded-xl">
          
            <div className="w-60 h-60 bg-cyan-500 shadow-lg shadow-cyan-500/50 rounded-full flex items-center justify-center text-9xl hover:flex hover:animate-spin">
              <ion-icon name="play-circle-outline"></ion-icon>
            </div>
          </div>

          <form
            className="text-black bg-gray-100 p-8 rounded-xl w-auto shadow-2xl shadow-gray-500/50"
            onSubmit={onSubmit}
          >
            <h1 className="text-2xl lg:text-4xl mb-10 lg:mb-14 font-bold">Bienvenido de nuevo!</h1>
          
            <label htmlFor="" className="text-xl font-light">
              Email
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="w-full  text-white px-4 py-4 rounded-full lg:rounded-md my-2 mb-5"
              placeholder="Email"
            />

            <label htmlFor="" className="text-xl font-light">Contraseña</label>
            <input
              type="password"
              {...register("contraseña", { required: true })}
              className="w-full text-black px-4 py-4 rounded-full lg:rounded-md my-2 lg:mb-10"
              placeholder="Contraseña"
            />

            <AuthButton>Inicia sesión!</AuthButton>
          </form>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
