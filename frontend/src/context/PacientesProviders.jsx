import {createContext, useState, useEffect} from "react";
import clienteAxios from "../config/axios.jsx";


const PacientesContext = createContext();

const PacientesProviders = ({children}) =>{
    return(
        <PacientesContext.Provider
            value={{

            }}
        >
            {children}
        </PacientesContext.Provider>
    )
}

export {PacientesProviders}

export default PacientesContext;