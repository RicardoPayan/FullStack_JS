import {Link} from "react-router-dom";
import {useState} from "react";
import axios from "axios";
import Alerta from '../components/Alerta.jsx';

const Registrar = () => {

    /*States*/
    const [nombre, setNombre] =  useState('');
    const [email, setEmail] =  useState('');
    const [password, setPassword] =  useState('');
    const [repetirPassword, setRepetirPassword] =  useState('');
    const [alerta, setAlerta] = useState({});


    /*Validacion*/
    const handleSubmit = async e =>{
        e.preventDefault();

        /*Validar que los campos no esten vacios*/
        if([nombre,email,password,repetirPassword].includes('')){
            setAlerta({msg: 'Hay campos vacios', error: true});
            return;
        }

        if(password !== repetirPassword){
            setAlerta({msg: 'Las Contraseñas no coinciden', error: true});
            return;
        }

        if(password.length < 6){
            setAlerta({msg: 'La contraseña debe ser de al menos 6 caracteres', error: true});
            return;
        }

        setAlerta({})

        /*Crear Usuario en la Api*/
        try {
            const url = "http://localhost:4000/api/veterinarios"
            await axios.post(url, {nombre, email, password});
            setAlerta({msg : 'Creado correctamente, revisa tue email', error : false})
        }catch (error){
            setAlerta({
                msg : error.response.data.msg,
                error : true
            })
        }


    }

    const {msg} = alerta

  return (
    <>
        <div>
            <h1 className="text-indigo-600 font-black text-6xl">
                Crea tu Cuenta y Administra  <span className="text-black">tus Pacientes</span>
            </h1>
        </div>

        <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">

            {msg && <Alerta
                alerta = {alerta}
            />}

            <form
            onSubmit={handleSubmit}>
                <div className="my-5">
                    <label className="uppercase text-gray-600 block text-xl font-bold">
                        Nombre
                    </label>
                    <input
                        className="border w-full p-3 mt-3 bg-gray-50 rounded-xl "
                        type="text"
                        placeholder="Tu Nombre"
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
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
                        value={email}
                        onChange={e => setEmail(e.target.value)}
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
                        value={password}
                        onChange={e => setPassword(e.target.value)}
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
                        value={repetirPassword}
                        onChange={e => setRepetirPassword(e.target.value)}
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