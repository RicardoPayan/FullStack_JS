import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import generarId from '../helpers/generarId.js';

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
        type : String,
        default : generarId()
    },
    confirmado:{
        type: Boolean,
        default: false
    }
});

//Antes de guardar, hashearemos el password.
//Para eso usare el middleware pre()
veterinarioSchema.pre('save', async function(next){

    //Es para que un password que ya esta hasheado, no lo vuelva a hashear
    if(!this.isModified('password')){
        next();
    };

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt);
});

//Verificando que la password del formulario sea igual a la hasheada
veterinarioSchema.methods.comprobarPassword = async function (passwordFormulario) {
    return await bcrypt.compare(passwordFormulario, this.password);
    
};

//Le decimos a Mongo que existe este modelo, su nombre y que forma tendra
const Veterinario = mongoose.model('Veterinario', veterinarioSchema);

//Exportamos el modelo para que pueda ser usado en los controladores
export default Veterinario;