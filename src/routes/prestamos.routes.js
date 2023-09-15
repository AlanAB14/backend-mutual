import { Router } from 'express'
import { verificarToken } from '../middleware/verificarToken.js'
import { createPrestamo, deletePrestamo, getPrestamo, getPrestamos } from '../controllers/prestamos.controller.js'


const router = Router()

router.get('/prestamos', verificarToken,getPrestamos)

router.get('/prestamos/:id', verificarToken,getPrestamo)

router.post('/prestamos', createPrestamo)

router.delete('/prestamos/:id', verificarToken, deletePrestamo)


export default router;