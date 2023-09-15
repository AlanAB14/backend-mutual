import { Router } from 'express'
import { verificarToken } from '../middleware/verificarToken.js';
import { getDicen, updateDicen } from '../controllers/dicen.controller.js';

const router = Router()

router.get('/dicen', getDicen)
router.patch('/dicen/:id', verificarToken, updateDicen)

export default router;