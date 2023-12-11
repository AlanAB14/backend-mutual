const { Router } = require('express');
const { verificarToken } = require('../middleware/verificarToken.js');
const { getDicen, updateDicen } = require('../controllers/dicen.controller.js');

const router = Router();

router.get('/dicen', getDicen);
router.patch('/dicen/:id', verificarToken, updateDicen);

module.exports = router;
