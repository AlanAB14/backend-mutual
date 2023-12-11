const express = require('express');
const router = express.Router();
const { postCorreo } = require('../controllers/correo.controller.js');

router.post('/correo', postCorreo);

module.exports = router;
