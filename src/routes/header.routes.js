import { Router } from 'express'
import { verificarToken } from '../middleware/verificarToken.js'
import { createHeader, deleteHeader, getHeader, getHeaderSolo, updateHeader } from '../controllers/header.controller.js'


const router = Router()

router.get('/header', getHeader)

router.get('/header/:id', getHeaderSolo)

router.post('/header', verificarToken, createHeader)

router.patch('/header/:id', verificarToken, updateHeader)

router.delete('/header/:id', verificarToken, deleteHeader)


export default router;