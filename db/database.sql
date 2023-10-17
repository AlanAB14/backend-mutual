set global max_allowed_packet=1000000000;

CREATE DATABASE IF NOT EXISTS mutual;

USE mutual;

CREATE TABLE IF NOT EXISTS servicios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    url VARCHAR(40) NOT NULL,
    icon TEXT NOT NULL,
    image LONGTEXT NOT NULL,
    texto TEXT NOT NULL,
    caracteristicas json NOT NULL,
    selected BOOLEAN NOT NULL
);
DESCRIBE servicios;

CREATE TABLE IF NOT EXISTS nosotros (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    texto TEXT NOT NULL,
    video LONGTEXT NOT NULL,
    selected BOOLEAN NOT NULL
);
DESCRIBE nosotros;

CREATE TABLE IF NOT EXISTS dicen (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    texto TEXT NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    trabajo VARCHAR(50) NOT NULL,
    imagen TEXT NOT NULL
);
DESCRIBE dicen;

CREATE TABLE IF NOT EXISTS categoriasPreguntas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS preguntas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    categoria_id INT,
    pregunta TEXT NOT NULL,
    respuesta TEXT NOT NULL,
    FOREIGN KEY (categoria_id) REFERENCES categoriasPreguntas(id)
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

CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    super_admin BOOLEAN NOT NULL
);
DESCRIBE usuarios;

CREATE TABLE IF NOT EXISTS prestamos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tipo VARCHAR(255) NOT NULL,
    data json NOT NULL
);

CREATE TABLE IF NOT EXISTS intereses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tipo VARCHAR(255) NOT NULL,
    interes DECIMAL
);

INSERT INTO servicios VALUES
    (0, 'Préstamos Personales', 'prestamos-personales', 'asd', 'asd', 'Nuestros préstamos personales le permiten a usted y su familia hacer realidad los proyectos Usted elije el destino de los fondos para hacer realidad sus proyectos.', '["Usted elije el destino de los fondos para hacer realidad sus proyectos.","Disponibilidad inmediata.","La tasa más conveniente del mercado.","Plazo de financiación acorde a sus necesidades.","Cuotas mensuales, trimestrales y semestrales.","Tasa fija – Cuota Fija."]', true),
    (1, 'Préstamos Prendarios', 'prestamos-prendarios', 'asd', 'asd', 'Para la adquisición de automotores, camiones, utilitarios y otros destinos.', '["Usted elije el destino de los fondos.","Disponibilidad inmediata.","La tasa más conveniente del mercado.","Plazo de financiación acorde a sus necesidades.","Cuotas mensuales, trimestrales y semestrales.","Tasa fija – Cuota Fija.","Pago íntegro hasta 180 días."]', false),
    (2, 'Préstamos Agropecuarios', 'prestamos-agropecuarios', 'asd', 'asd', 'Para la compra de semillas, combustible, insumos, fertilizantes, equipamiento tecnológico. Devolución cosecha fina y cosecha gruesa.', '["Usted elije el destino de los fondos.","Disponibilidad inmediata.","La tasa más conveniente del mercado.","Plazo de financiación acorde a sus necesidades.","Cuotas mensuales, trimestrales y semestrales.","Tasa fija – Cuota Fija.","Pago íntegro hasta 180 días."]', false),
    (3, 'Préstamos Empresariales', 'prestamos-empresariales', 'asd', 'asd', 'Asistencia financiera de corto plazo con caución de valores (Cheques). Financiación a clientes.', '["Usted elije el destino de los fondos.","Disponibilidad inmediata.","La tasa más conveniente del mercado.","Plazo de financiación acorde a sus necesidades.","Cuotas mensuales, trimestrales y semestrales.","Tasa fija – Cuota Fija.","Pago íntegro hasta 180 días."]', false),
    (4, 'Préstamos Empleados Públicos', 'prestamos-empleados-publicos', 'asd', 'asd', 'Si sos empleado público de la provincia de Santa Fe solicitá tu crédito hasta $150.000', '["Elegí el destino de los fondos para hacer realidad sus proyectos.","Disponibilidad inmediata.","La tasa más conveniente del mercado.","Hasta 36 cuotas fijas."]', false),
    (5, 'Inversiones', 'inversiones', 'asd', 'asd', 'asd', '["asd"]', false),
    (6, 'Recaudaciones', 'recaudaciones', 'asd', 'asd', 'Cobramos todos sus impuestos y servicios', '["Débito automático de Caja de ahorro SIN COSTO"]', false),
    (7, 'Consultorio Jurídico', 'consultorio-juridico', 'asd', 'asd', 'Asesoramiento jurídico gratuito', '["Asesores legales", "Asesoramiento permanente", "Gratuito"]', false)

INSERT INTO nosotros VALUES
    (0, 'Mutual Entre Asociados de Cooperación Mutual Patronal', 'Mutual Entre Asociados De Cooperación Mutual Patronal desarrolla la actividad de Ayuda Económica dentro de un marco de permanente crecimiento. Nuestro origen surge como un nuevo servicio de Cooperación Mutual Patronal Seguros Generales, con una amplia trayectoria en el mercado asegurador siendo la aseguradora mutual más antigua del país.', 'asd', true)

INSERT INTO dicen VALUES
    (0, 'It proved to be exactly the kind of home we wanted.', 'We wish to express our thanks for your hard work in finding us a temporary home, which proved to be exactly what we wanted.', 'Jaydon Aminoff', 'Abogado', 'asd'),
    (0, 'It proved to be exactly the kind of home we wanted.', 'We wish to express our thanks for your hard work in finding us a temporary home, which proved to be exactly what we wanted.', 'Jaydon Aminoff', 'Abogado', 'asd'),
    (0, 'It proved to be exactly the kind of home we wanted.', 'We wish to express our thanks for your hard work in finding us a temporary home, which proved to be exactly what we wanted.', 'Jaydon Aminoff', 'Abogado', 'asd')

INSERT INTO categoriasPreguntas VALUES
    (1, "General"),
    (2, "Payments"),
    (3, "Services"),
    (4, "Refund"),
    (5, "Contact")

INSERT INTO preguntas VALUES
    (1, 1, '¿Cómo pago las cuotas del préstamo que pedí?', 'El pago de tu préstamo se debita de tu cuenta en forma automática. Solo tenés que asegurarte de contar con la plata correspondiente al valor de la cuota, el día que configuraste como fecha de pago, ¡y listo!. Esto sucederá todos los meses hasta cumplir con el plazo que hayas elegido cuando pediste el préstamo.'),
    (2, 1, '¿Dónde puedo ver los términos y condiciones de las cuotas de mis consumos?', 'Los términos y condiciones te los vamos a enviar por mail una vez que confirmes la transacción. También podés verlos previo a pasar tu consumo a cuotas, cuando hagas la solicitud desde la web de Mutual.'),
    (3, 1, '¿Cómo sé cuáles son las fechas de vencimiento de mi préstamo en Mutual?', 'Ejemplo de respuesta'),
    (4, 1, '¿En cuántas cuotas puedo devolver mi préstamo?', 'Ejemplo de respuesta 1'),
    (5, 1, '¿Cuáles son los requisitos para pedir un préstamo?', 'Ejemplo de respuesta 2'),
    (6, 1, '¿Hay cargos ocultos o adicionales en las cuotas de los préstamos de Mutual?', 'Ejemplo de respuesta 3'),
    (7, 2, '¿Hay cargos ocultos o adicionales en las cuotas de los préstamos de Mutual?', 'Ejemplo de respuesta 4'),
    (8, 3, '¿Hay cargos ocultos o adicionales en las cuotas de los préstamos de Mutual?', 'Ejemplo de respuesta 5'),
    (9, 4, '¿Hay cargos ocultos o adicionales en las cuotas de los préstamos de Mutual?', 'Ejemplo de respuesta 6'),
    (10, 5, '¿Hay cargos ocultos o adicionales en las cuotas de los préstamos de Mutual?', 'Ejemplo de respuesta 7')
