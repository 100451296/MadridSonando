import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import AuthButton from "../components/AuthButton";
import AuthDecoration from "../components/AuthDecoration";

function LoginPage() {
  const { register, handleSubmit } = useForm();
  const { login } = useAuth();

  const onSubmit = handleSubmit(async (values) => {
    login(values);
  });

  return (
    <section className="flex min-h-screen justify-center items-center bg-gray-200 px-2 lg:px-0">
      <div className="bg-gray-900 shadow-2xl shadow-gray-500/50 rounded-2xl">
        <div className="flex justify-between">
          
          <AuthDecoration>
            <ion-icon name="log-in-outline"></ion-icon>
          </AuthDecoration>

          <form
            className="text-black bg-gray-100 p-8 rounded-xl w-auto shadow-2xl shadow-gray-500/50"
            onSubmit={onSubmit}
          >
            <h1 className="text-2xl lg:text-4xl mb-10 lg:mb-14 font-bold">
              Bienvenido de nuevo!
            </h1>

            <label htmlFor="" className="text-xl font-light">
              Email
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="w-full px-4 py-4 rounded-full lg:rounded-md my-2 mb-5"
              placeholder="Email"
            />

            <label htmlFor="" className="text-xl font-light">
              Contraseña
            </label>
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
