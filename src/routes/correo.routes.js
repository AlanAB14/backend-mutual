import { Router } from 'express'
import { postCorreo } from '../controllers/correo.controller.js';

const router = Router()

router.post('/correo', postCorreo)

export default router;