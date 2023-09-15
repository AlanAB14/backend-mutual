import { Router } from 'express'
import { getNosotros, updateNosotros } from '../controllers/nosotros.controller.js'


const router = Router()

router.get('/nosotros', getNosotros)
router.patch('/nosotros/:id', updateNosotros)

export default router;