import mongoose from 'mongoose';

//Dandole la forma al model
const veterinarioSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: true,
        trim: true
    },
    password:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    telefeno:{
        type: String,
        default: null,
        trim: true
    },
    web:{
        type: String,
        default: null,
    },
    token : {
        type : String
    },
    confirmado:{
        type: Boolean,
        default: false
    }
});

//Le decimos a Mongo que existe este modelo, su nombre y que forma tendra
const Veterinario = mongoose.model('Veterinario', veterinarioSchema);

//Exportamos el modelo para que pueda ser usado en los controladores
export default Veterinario;