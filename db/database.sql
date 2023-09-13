CREATE DATABASE IF NOT EXISTS mutual;

USE mutual;

CREATE TABLE IF NOT EXISTS servicios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    url VARCHAR(40) NOT NULL,
    icon TEXT NOT NULL,
    image TEXT NOT NULL,
    texto TEXT NOT NULL,
    caracteristicas json NOT NULL,
    selected BOOLEAN NOT NULL
);
DESCRIBE servicios;

CREATE TABLE IF NOT EXISTS nosotros (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    texto TEXT NOT NULL,
    video BLOB NOT NULL,
    selected BOOLEAN NOT NULL
);
DESCRIBE nosotros;

CREATE TABLE IF NOT EXISTS dicen (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    texto TEXT NOT NULL,
    nombre VARCHAR(50),
    trabajo VARCHAR(50),
    imagen TEXT NOT NULL
);
DESCRIBE dicen;

CREATE TABLE IF NOT EXISTS preguntas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    categoria VARCHAR(255) NOT NULL,
    pregunta TEXT NOT NULL,
    respuesta TEXT NOT NULL
);
DESCRIBE preguntas;

CREATE TABLE IF NOT EXISTS prestamos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tipo VARCHAR(255) NOT NULL,
    data json
);
DESCRIBE prestamos;

CREATE TABLE IF NOT EXISTS intereses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tipo VARCHAR(255) NOT NULL,
    interes DECIMAL
);
DESCRIBE intereses;

INSERT INTO servicios VALUES
    (0, 'Préstamos Personales', 'prestamos-personales', 'asd', 'asd', 'Nuestros préstamos personales le permiten a usted y su familia hacer realidad los proyectos Usted elije el destino de los fondos para hacer realidad sus proyectos.', '["Usted elije el destino de los fondos para hacer realidad sus proyectos.","Disponibilidad inmediata.","La tasa más conveniente del mercado.","Plazo de financiación acorde a sus necesidades.","Cuotas mensuales, trimestrales y semestrales.","Tasa fija – Cuota Fija."]', true)
    (1, 'Préstamos Prendarios', 'prestamos-prendarios', 'asd', 'asd', 'Para la adquisición de automotores, camiones, utilitarios y otros destinos.', '["Usted elije el destino de los fondos.","Disponibilidad inmediata.","La tasa más conveniente del mercado.","Plazo de financiación acorde a sus necesidades.","Cuotas mensuales, trimestrales y semestrales.","Tasa fija – Cuota Fija.","Pago íntegro hasta 180 días."]', true)
