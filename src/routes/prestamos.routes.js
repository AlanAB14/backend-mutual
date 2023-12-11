const { Router } = require('express');
const { verificarToken } = require('../middleware/verificarToken.js');
const {
    createPrestamo,
    deletePrestamo,
    getPrestamo,
    getPrestamos
} = require('../controllers/prestamos.controller.js');

const router = Router();

router.get('/prestamos', verificarToken, getPrestamos);
router.get('/prestamos/:id', verificarToken, getPrestamo);
router.post('/prestamos', createPrestamo);
router.delete('/prestamos/:id', verificarToken, deletePrestamo);

module.exports = router;
