//Configuracion para conectar a la base de datos de MongoDB
import mongoose from "mongoose";

//Funcion para conectar a la base de datos
const conectarDB = async() => {
    try {
        //Colocando el string de conexion
        const db = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        const url = `${db.connection.host}:${db.connection.port}`
        console.log(`MongoDb conectado en: ${url}`);

    } catch (error) {
        console.log(`error: ${error.message}`);
        process.exit(1); //Imprimiendo mensaje de error
    }
};

export default conectarDB;