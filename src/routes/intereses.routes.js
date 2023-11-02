import { Router } from 'express'
import { getIntereses, updateIntereses } from '../controllers/intereses.controller.js'


const router = Router()

router.get('/intereses', getIntereses)
router.patch('/intereses/:id', updateIntereses)

export default router;