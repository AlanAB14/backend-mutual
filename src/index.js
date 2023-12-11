// Importar módulos en CommonJS
const config = require('./config.js');
const app = require('./app.js');

// Extraer variables necesarias de config
const { PORT } = config;

// Escuchar en el puerto
app.listen(PORT);

// Imprimir mensaje
console.log('Server running on port', PORT);
