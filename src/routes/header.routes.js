const { Router } = require('express');
const { verificarToken } = require('../middleware/verificarToken.js');
const {
    createHeader,
    deleteHeader,
    getHeader,
    getHeaderSolo,
    updateHeader
} = require('../controllers/header.controller.js');

const router = Router();

router.get('/header', getHeader);
router.get('/header/:id', getHeaderSolo);
router.post('/header', verificarToken, createHeader);
router.patch('/header/:id', verificarToken, updateHeader);
router.delete('/header/:id', verificarToken, deleteHeader);

module.exports = router;
