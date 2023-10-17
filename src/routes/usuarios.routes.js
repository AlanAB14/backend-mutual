import { Router } from 'express'
import { deleteUsuario, loginUsuario, registerUsuario, updateUsuario } from '../controllers/usuarios.controller.js';
import { verificarToken } from '../middleware/verificarToken.js';

const router = Router()

router.post('/usuarios/register', registerUsuario)
router.post('/usuarios/login', loginUsuario)
router.patch('/usuarios/:id', verificarToken, updateUsuario)
router.delete('/usuarios/:id', verificarToken, deleteUsuario)

export default router;