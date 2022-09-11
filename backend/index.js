//Configuracion de express para el backend

import  express  from "express";
import dotenv from "dotenv"; //Para variables de entorno
import conectarDB from "./config/db.js";

//Iniciando express
const app = express();
dotenv.config();

conectarDB();


//Definiendo una ruta
app.use('/',(req, res) =>{
    res.send('Hola mundo');
});

const PORT = process.env.PORT || 4000;

//Definiendo el servidor
app.listen(PORT, ()=> {
    console.log(`Servidor funcionando en el puerto ${PORT}`);
});