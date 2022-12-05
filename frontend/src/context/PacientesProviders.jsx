import {createContext, useState, useEffect} from "react";
import clienteAxios from "../config/axios.jsx";


const PacientesContext = createContext();

const PacientesProviders = ({children}) =>{

    const [pacientes, setPacientes] = useState([]);

    useEffect(()=>{
        const obtenerPacientes = async () =>{
            try {
                const token = localStorage.getItem('token');
                if(!token) return;
                const config = {
                    headers : {
                        "Content-Type" : "application/json",
                        Authorization: `Bearer ${token}`
                    }
                }
                const {data} = await clienteAxios('/pacientes',config);
                setPacientes(data);

            }catch (e) {
                console.log(e)
            }
        }
        obtenerPacientes()
    },[])

    const guardarPaciente = async (paciente)=>{
        try{
            const token = localStorage.getItem('token');
            const config = {
                headers : {
                    "Content-Type" : "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
           const {data} = await clienteAxios.post('/pacientes', paciente, config);

            //Creando un nuevo objeto con todo menos lo que se puso antes
           const {createdAt, updateAt, __v, ...pacienteAlmacenado} = data
           setPacientes([pacienteAlmacenado, ...pacientes]);
        }catch (error){
            console.log(error.response.data.msg);
        }
    }

    return(
        <PacientesContext.Provider
            value={{
                pacientes,
                guardarPaciente
            }}
        >
            {children}
        </PacientesContext.Provider>
    )
}

export {PacientesProviders}

export default PacientesContext;