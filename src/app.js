import express from 'express';
import serviciosRoutes from './routes/servicios.routes.js'
import indexRoutes from './routes/index.routes.js'

const app = express()
app.use(express.json())

app.use(indexRoutes);
app.use('/api', serviciosRoutes);
app.use((req, res, next) => {
    res.status(404).json({
        message: 'Endpoint not found'
    })
})

export default app;