import { useForm } from "react-hook-form";
import AuthButton from "../components/AuthButton";
import { useAuth } from "../context/AuthContext";

function ProfilePage() {
  const { register, handleSubmit } = useForm();
  const { user } = useAuth();

  const onSubmit = handleSubmit(async (values) => {
    console.log("profile", user, values);
    return;
  });

  return (
    <section className="flex min-h-screen justify-center items-center bg-gray-200 px-2 lg:px-15">
      <div className="bg-gray-900 shadow-2xl shadow-gray-500/50 rounded-2xl">
        <div className="flex justify-between">
          <div className="hidden w-4/6 lg:flex bg-gray-800 items-center shadow-2xl shadow-gray-500/50 justify-center rounded-xl relative">
            {/* Agregar la imagen de fondo */}
            <div className="absolute inset-0 z-0">
              <img
                src="./public/formImage.jpg"
                alt="Background"
                className="object-cover w-full h-full opacity-80 blur-lg"
              />
            </div>
            <div className="w-60 h-60 bg-cyan-500 shadow-lg shadow-cyan-500/50 rounded-full flex items-center justify-center text-9xl relative">
            <ion-icon name="person-circle-outline"></ion-icon>
            </div>
          </div>

          <form
            className="text-black bg-gray-100 p-8 rounded-xl w-auto shadow-2xl shadow-gray-500/50"
            onSubmit={onSubmit}
          >
            <h1 className="text-2xl lg:text-4xl mb-10 lg:mb-14 font-bold">
              Informacion de Perfil
            </h1>

            <label htmlFor="" className="text-xl font-light">
              Email
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="w-full  text-white px-4 py-4 rounded-full lg:rounded-md my-2 mb-5"
              placeholder={user.email}
            />

            <label htmlFor="" className="text-xl font-light">
              Nombre
            </label>
            <input
              type="text"
              {...register("contraseña", { required: true })}
              className="w-full text-black px-4 py-4 rounded-full lg:rounded-md my-2 lg:mb-5"
              placeholder={user.nombre}
            />

            <label htmlFor="" className="text-xl font-light">
              Direccion
            </label>
            <input
              type="text"
              {...register("contraseña", { required: true })}
              className="w-full text-black px-4 py-4 rounded-full lg:rounded-md my-2 lg:mb-10"
              placeholder={user.direccion}
            />

            <AuthButton>Actualiza tu Perfil</AuthButton>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ProfilePage;
