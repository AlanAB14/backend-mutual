import { Router } from 'express'
import { loginUsuario, registerUsuario } from '../controllers/usuarios.controller.js';

const router = Router()

router.post('/usuarios/register', registerUsuario)
router.post('/usuarios/login', loginUsuario)

export default router;