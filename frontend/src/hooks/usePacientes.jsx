import {useContext} from "react";
import PacientesContext from "../context/PacientesProviders.jsx";

const usePacientes = ()=>{
    return useContext(PacientesContext);
}

export default usePacientes;