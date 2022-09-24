//Configuracion de express para el backend

import  express  from "express";
import dotenv from "dotenv"; //Para variables de entorno
import conectarDB from "./config/db.js";
import veterinarioRoutes  from "./routes/veterinarioRoutes.js";
import pacienteRoutes  from "./routes/pacienteRoutes.js";

//Iniciando express
const app = express();

//Diciendole a express que enviaremos datos del tipo JSON
app.use(express.json());

dotenv.config();

conectarDB();


//Definiendo una ruta
app.use('/api/veterinarios', veterinarioRoutes);
app.use('/api/pacientes', pacienteRoutes);

const PORT = process.env.PORT || 4000;

//Definiendo el servidor
app.listen(PORT, ()=> {
    console.log(`Servidor funcionando en el puerto ${PORT}`);
});