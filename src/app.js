import express from 'express';
import serviciosRoutes from './routes/servicios.routes.js'
import nosotrosRoutes from './routes/nosotros.routes.js'
import usuariosRoutes from './routes/usuarios.routes.js'
import dicenRoutes from './routes/dicen.routes.js'
import categoriaPreguntasRoutes from './routes/categoriasPreguntas.routes.js'
import preguntasRoutes from './routes/preguntas.routes.js'
import prestamosRoutes from './routes/prestamos.routes.js'
import indexRoutes from './routes/index.routes.js'
import bodyParser from 'body-parser'
import cors from 'cors'

app.use(cors())
const app = express()
app.use(bodyParser.json({ limit: "500mb" }))
app.use(bodyParser.urlencoded({ limit: '500mb', extended: true, parameterLimit: 50000 }));

app.use(indexRoutes);
app.use('/api', serviciosRoutes);
app.use('/api', nosotrosRoutes);
app.use('/api', usuariosRoutes);
app.use('/api', dicenRoutes);
app.use('/api', categoriaPreguntasRoutes);
app.use('/api', preguntasRoutes);
app.use('/api', prestamosRoutes);

app.use((req, res, next) => {
    res.status(404).json({
        message: 'Endpoint not found'
    })
})

export default app;