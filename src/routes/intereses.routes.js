const { Router } = require('express');
const { getIntereses, updateIntereses } = require('../controllers/intereses.controller.js');

const router = Router();

router.get('/intereses', getIntereses);
router.patch('/intereses/:id', updateIntereses);

module.exports = router;
