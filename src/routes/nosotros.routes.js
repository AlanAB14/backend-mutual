const { Router } = require('express');
const { getNosotros, updateNosotros } = require('../controllers/nosotros.controller.js');

const router = Router();

router.get('/nosotros', getNosotros);
router.patch('/nosotros/:id', updateNosotros);

module.exports = router;
