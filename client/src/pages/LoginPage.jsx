import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import AuthButton from "../components/AuthButton";


function LoginPage() {
  const {register, handleSubmit} = useForm();
  const { login, } = useAuth();

  const onSubmit = handleSubmit(async (values) => {
    login(values);
  });

  return (
    <div className="flex justify-center items-center flex-col h-screen p-5">
    <div className="bg-zinc-900 max-w-md p-4 rounded-md text-center shadow-xl">
      <h1 className="text-4xl font-bold white mb-4">Inicia sesión</h1>
      <form onSubmit={onSubmit}>

        <input
          type="email"
          {...register("email", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="Email"
        />

        <input
          type="password"
          {...register("contraseña", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="Contraseña"
        />
        { false && <p className="text-red-500">Email o Contraseña incorrectos</p>}

        <AuthButton>Incia sesion!</AuthButton>
      </form>
    </div>
  </div>
  )
}

export default LoginPage