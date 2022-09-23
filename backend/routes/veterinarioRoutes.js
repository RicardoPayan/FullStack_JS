//Rutas relacionadas con veterinarios
import express from 'express';
import { registrar, 
    perfil, 
    confirmar, 
    autenticar,
    olvidePassword,
    comprobarToken,
    nuevoPassword 
} from '../controllers/veterinarioController.js';
import checkAuth from '../middleware/authMiddleware.js';

const router = express.Router();


//Rutas para area publica (no se necesita cuenta para acceder a ellas)
router.post("/",registrar);
router.get('/confirmar/:token', confirmar);
router.post('/login',autenticar);
router.post('/olvide-password',olvidePassword);
router.route('/olvide-password/:token').get(comprobarToken).post(nuevoPassword); //Formar de declarar ruta que es GET y POST


//Area Privada
//En esta rutas primero verificamos que el usuario este autentificado
// si lo esta, entonces continua el codigo.
router.get('/perfil',checkAuth,perfil);



export default router;
