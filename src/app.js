const express = require('express');
const serviciosRoutes = require('./routes/servicios.routes.js');
const nosotrosRoutes = require('./routes/nosotros.routes.js');
const usuariosRoutes = require('./routes/usuarios.routes.js');
const dicenRoutes = require('./routes/dicen.routes.js');
const categoriaPreguntasRoutes = require('./routes/categoriasPreguntas.routes.js');
const preguntasRoutes = require('./routes/preguntas.routes.js');
const prestamosRoutes = require('./routes/prestamos.routes.js');
const headerRoutes = require('./routes/header.routes.js');
const interesesRoutes = require('./routes/intereses.routes.js');
const correoRoutes = require('./routes/correo.routes.js');
const indexRoutes = require('./routes/index.routes.js');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: "500mb" }));
app.use(bodyParser.urlencoded({ limit: '500mb', extended: true, parameterLimit: 50000 }));

app.use(indexRoutes);
app.use('/api', serviciosRoutes);
app.use('/api', nosotrosRoutes);
app.use('/api', usuariosRoutes);
app.use('/api', dicenRoutes);
app.use('/api', categoriaPreguntasRoutes);
app.use('/api', preguntasRoutes);
app.use('/api', prestamosRoutes);
app.use('/api', headerRoutes);
app.use('/api', interesesRoutes);
app.use('/api', correoRoutes);

app.use((req, res, next) => {
    res.status(404).json({
        message: 'Endpoint not found'
    });
});

module.exports = app;
