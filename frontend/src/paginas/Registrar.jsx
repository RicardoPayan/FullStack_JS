import {Link} from "react-router-dom";

const Registrar = () => {
  return (
    <>
        <div>
            <h1 className="text-indigo-600 font-black text-6xl">
                Crea tu Cuenta y Administra  <span className="text-black">tus Pacientes</span>
            </h1>
        </div>

        <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
            <form>
                <div className="my-5">
                    <label className="uppercase text-gray-600 block text-xl font-bold">
                        Nombre
                    </label>
                    <input
                        className="border w-full p-3 mt-3 bg-gray-50 rounded-xl "
                        type="text"
                        placeholder="Tu Nombre"
                    />
                </div>

                <div className="my-5">
                    <label className="uppercase text-gray-600 block text-xl font-bold">
                        Email
                    </label>
                    <input
                        className="border w-full p-3 mt-3 bg-gray-50 rounded-xl "
                        type="email"
                        placeholder="Email de registro"
                    />
                </div>

                <div className="my-5">
                    <label className="uppercase text-gray-600 block text-xl font-bold">
                        Contraseña
                    </label>
                    <input
                        className="border w-full p-3 mt-3 bg-gray-50 rounded-xl "
                        type="password"
                        placeholder="Contraseña"
                    />
                </div>

                <div className="my-5">
                    <label className="uppercase text-gray-600 block text-xl font-bold">
                        Repetir Contraseña
                    </label>
                    <input
                        className="border w-full p-3 mt-3 bg-gray-50 rounded-xl "
                        type="password"
                        placeholder="Repeti tu Contraseña"
                    />
                </div>

                <input
                    className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto"
                    type="submit"
                    value="Registrarme"
                />
            </form>

            <nav className="mt-10 lg:flex lg:justify-between">
                <Link
                    className="block text-center my-5 text-gray-500"
                    to="/">¿Ya tienes una cuenta? Inicia Sesión
                </Link> {/*Enlacesc con react*/}
                <Link
                    className="block text-center my-5 text-gray-500"
                    to="/olvide-password">Olvide mi Contraseña
                </Link>
            </nav>
        </div>


    </>
  )
}

export default Registrar