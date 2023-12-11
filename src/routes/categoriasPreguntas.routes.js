const { Router } = require('express');
const { verificarToken } = require('../middleware/verificarToken.js');
const {
    createCategoriaPregunta,
    deleteCategoriaPregunta,
    getCategoriaPreguntas,
    getCategoriasPreguntas,
    updateCategoriaPregunta
} = require('../controllers/categoriasPreguntas.controller.js');

const router = Router();

router.get('/categoriasPreguntas', getCategoriasPreguntas);
router.get('/categoriasPreguntas/:id', getCategoriaPreguntas);
router.post('/categoriasPreguntas', verificarToken, createCategoriaPregunta);
router.patch('/categoriasPreguntas/:id', verificarToken, updateCategoriaPregunta);
router.delete('/categoriasPreguntas/:id', verificarToken, deleteCategoriaPregunta);

module.exports = router;
