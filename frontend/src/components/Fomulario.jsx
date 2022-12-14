import {useState, useEffect} from "react";
import Alerta from "./Alerta.jsx";
import usePacientes from "../hooks/usePacientes.jsx";

const Formulario = () => {

  const[nombre,setNombre] = useState('');
  const[propietario,setPropietario] = useState('');
  const[email,setEmail] = useState('');
  const[fecha,setFecha] = useState('');
  const[sintomas,setSintomas] = useState('');
  const [id, setId] = useState(null);

  const [alerta, setAlerta] = useState({});

  const {guardarPaciente, paciente} = usePacientes();

  useEffect(()=>{
      if(paciente?.nombre){
        setNombre(paciente.nombre);
        setEmail(paciente.email);
        setPropietario(paciente.propietario);
        setFecha(new Date(paciente.fecha).toISOString());
        setSintomas(paciente.sintomas);
        setId(paciente._id);
      }
  }, [paciente])


  const handleSubmit = e  =>{
    e.preventDefault()

    //Validar formulario
    if([nombre, propietario, email, fecha, sintomas].includes('')){
      setAlerta({msg : "Todos los campos son obligatorios", error :  true})
      return;
    }


    guardarPaciente({nombre, propietario, email, fecha, sintomas,id});
    setAlerta({msg : "Guardado correctamente"});

    setNombre('');
    setPropietario('');
    setEmail('');
    setFecha('');
    setSintomas('');
    setId('');
  }

  const {msg} = alerta;

  return(
      <>
        <h2 className={"font-black text-xl text-center"}>Administrador de pacientes</h2>
        <p className={"text-lg text-center mb-10 mt-5"}>
          Añade tus pacientes y {''}
          <span className={"text-indigo-600 font-bold"}>Administralos</span>
        </p>


        <form
            className={"bg-white py-10 px-5 mb-10 lg:mb-5 shadow-md rounded-md"}
            onSubmit={handleSubmit}
        >
          <div className={"mb-5"}>
            <label htmlFor={"nombre"} className={"text-gray-800 uppercase font-bold"}>
              Nombre mascota
            </label>
            <input
              id={"nombre"}
              type={"text"}
              placeholder={"Nombre de la mascota"}
              className={"border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"}
              value={nombre}
              onChange={e => setNombre(e.target.value)}
            />
          </div>

          <div className={"mb-5"}>
            <label htmlFor={"propietario"} className={"text-gray-800 uppercase font-bold"}>
              Nombre Propietario
            </label>
            <input
                id={"propietario"}
                type={"text"}
                placeholder={"Nombre del propietario"}
                className={"border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"}
                value={propietario}
                onChange={e => setPropietario(e.target.value)}
            />
          </div>

          <div className={"mb-5"}>
            <label htmlFor={"email"} className={"text-gray-800 uppercase font-bold"}>
              Email Propietario
            </label>
            <input
                id={"email"}
                type={"text"}
                placeholder={"Email del propietario"}
                className={"border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"}
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
          </div>

          <div className={"mb-5"}>
            <label htmlFor={"fecha"} className={"text-gray-800 uppercase font-bold"}>
              Fecha de Alta
            </label>
            <input
                id={"fecha"}
                type={"date"}
                className={"border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"}
                value={fecha}
                onChange={e => setFecha(e.target.value)}
            />
          </div>

          <div className={"mb-5"}>
            <label htmlFor={"sintomas"} className={"text-gray-800 uppercase font-bold"}>
              Síntomas
            </label>
            <textarea
                id={"sintomas"}
                className={"border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"}
                placeholder={"Describe los síntomas"}
                value={sintomas}
                onChange={e => setSintomas(e.target.value)}
            >

            </textarea>
          </div>

          <input
            type={"submit"}
            className={"bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded-md hover:bg-indigo-800 cursor-pointer transition-colors" }
            value={id ? "Guardar Cambios" : "Agregar Pacientes"}
          />
        </form>

        {msg && <Alerta alerta={alerta}/>}
      </>



)
};


export default Formulario;