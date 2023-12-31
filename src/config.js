const dotenv = require('dotenv');
dotenv.config();

// Exportar variables
module.exports.PORT = process.env.PORT || 3000;
module.exports.DB_USER = process.env.DB_USER || 'root';
module.exports.DB_PASSWORD = process.env.DB_PASSWORD || '';
module.exports.DB_HOST = process.env.DB_HOST || 'localhost';
module.exports.DB_DATABASE = process.env.DB_DATABASE || 'mutual';
module.exports.DB_PORT = process.env.DB_PORT || 3306;

module.exports.SECRET_KEY = 'TokenMutual';