import { Router } from 'express'
import { verificarToken } from '../middleware/verificarToken.js'
import { createCategoriaPregunta, deleteCategoriaPregunta, getCategoriaPreguntas, getCategoriasPreguntas, updateCategoriaPregunta } from '../controllers/categoriasPreguntas.controller.js'


const router = Router()

router.get('/categoriasPreguntas', getCategoriasPreguntas)

router.get('/categoriasPreguntas/:id', getCategoriaPreguntas)

router.post('/categoriasPreguntas', verificarToken, createCategoriaPregunta)

router.patch('/categoriasPreguntas/:id', verificarToken, updateCategoriaPregunta)

router.delete('/categoriasPreguntas/:id', verificarToken,deleteCategoriaPregunta)


export default router;