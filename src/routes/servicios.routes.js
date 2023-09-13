import { Router } from 'express'
import { createServicio, deleteServicio, getServicio, getServicios, updateServicio } from '../controllers/servicios.controller.js'


const router = Router()

router.get('/servicios', getServicios)

router.get('/servicios/:id', getServicio)

router.post('/servicios', createServicio)

router.patch('/servicios/:id', updateServicio)

router.delete('/servicios/:id', deleteServicio)


export default router;