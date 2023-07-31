import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import AuthButton from "../components/AuthButton";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, } = useAuth();
  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  return (
    <div className="flex justify-center items-center flex-col h-screen p-5">
      <div className="bg-zinc-900 max-w-md p-10 rounded-md text-center shadow-xl">
        <h1 className="text-4xl font-bold white mb-4">Registrate!</h1>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            {...register("nombre", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Nombre"
          />
          {errors.nombre && <p className="text-red-500">Nombre es requirido</p>}

          <input
            type="email"
            {...register("email", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Email"
          />
            {errors.email && <p className="text-red-500">Email es requirido</p>}

          <input
            type="text"
            {...register("direccion", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Direccion"
          />
          {errors.direccion && <p className="text-red-500">Direccion es requirida</p>}

          <input
            type="password"
            {...register("contraseña", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Contraseña"
          />
          {errors.contraseña && <p className="text-red-500">Contraseña es requirida</p>}

          <AuthButton>Registrate!</AuthButton>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
