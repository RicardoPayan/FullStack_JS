import usePacientes from "../hooks/usePacientes.jsx";

const Paciente = ({paciente}) => {

    const {setEdicion,eliminarPaciente} = usePacientes();

    const {email, fecha, nombre, propietario, sintomas, _id} = paciente;


    const formatearFechas = fecha =>{
        const nuevaFecha  = new Date(fecha);
        return new Intl.DateTimeFormat('es-MX', {dateStyle : 'long'}).format(nuevaFecha);
    }


    return(
        <div className={"mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl"}>
            <p className={'font-bold uppercase text-indigo-800 my-5'}>
                Nombre: {' '} <span className={"font-normal normal-case text-black"}>{nombre}</span>
            </p>

            <p className={'font-bold uppercase text-indigo-800 my-5'}>
                Propietario: {' '} <span className={"font-normal normal-case text-black"}>{propietario}</span>
            </p>

            <p className={'font-bold uppercase text-indigo-800 my-5'}>
                Email: {' '} <span className={"font-normal normal-case text-black"}>{email}</span>
            </p>

            <p className={'font-bold uppercase text-indigo-800 my-5'}>
                Fecha de alta: {' '} <span className={"font-normal normal-case text-black"}>{formatearFechas(fecha)}</span>
            </p>

            <p className={'font-bold uppercase text-indigo-800 my-5'}>
                Síntomas: {' '} <span className={"font-normal normal-case text-black"}>{sintomas}</span>
            </p>

            <div className={"flex justify-between my-5"}>
                <button
                    type={'button'}
                    className={"py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white uppercase font-bold rounded-lg"}
                    onClick={() => setEdicion(paciente)}
                >Editar</button>

                <button
                    type={'button'}
                    className={"py-2 px-10 bg-red-600 hover:bg-red-700 text-white uppercase font-bold rounded-lg"}
                    onClick={()=>eliminarPaciente(_id)}
                >Eliminar</button>


            </div>
        </div>
    );

}

export default Paciente;