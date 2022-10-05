//Configuracion de express para el backend

import  express  from "express";
import dotenv from "dotenv"; //Para variables de entorno
import cors from 'cors';
import conectarDB from "./config/db.js";
import veterinarioRoutes  from "./routes/veterinarioRoutes.js";
import pacienteRoutes  from "./routes/pacienteRoutes.js";

//Iniciando express
const app = express();

//Diciendole a express que enviaremos datos del tipo JSON
app.use(express.json());

dotenv.config();

conectarDB();

const dominiosPermitidos = ['http://127.0.0.1:5173'];

const corsOptions = {
    origin : function (origin, callback) {
        if(dominiosPermitidos.indexOf(origin) !== -1){
            //El origen del request esta permitido
            callback(null, true);
        }else{
            callback(new Error('No permitido por CORS'))
        }
    }
}
app.use(cors(corsOptions));


//Definiendo una ruta
app.use('/api/veterinarios', veterinarioRoutes);
app.use('/api/pacientes', pacienteRoutes);

const PORT = process.env.PORT || 4000;

//Definiendo el servidor
app.listen(PORT, ()=> {
    console.log(`Servidor funcionando en el puerto ${PORT}`);
});