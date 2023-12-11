const express = require('express');
const { createServicio, deleteServicio, getServicio, getServicios, updateServicio } = require('../controllers/servicios.controller.js');
const { verificarToken } = require('../middleware/verificarToken.js');

const router = express.Router();

router.get('/servicios', getServicios);

router.get('/servicios/:id', getServicio);

router.post('/servicios', createServicio);

router.patch('/servicios/:id', verificarToken, updateServicio);

router.delete('/servicios/:id', deleteServicio);

module.exports = router;
