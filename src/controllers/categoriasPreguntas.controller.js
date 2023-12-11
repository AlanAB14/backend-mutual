const { pool } = require('./../db.js');

exports.getCategoriasPreguntas = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM categoriasPreguntas');
        res.json(rows);
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        });
    }
};

exports.getCategoriaPreguntas = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM categoriasPreguntas WHERE id = ?', [req.params.id]);
        if (rows.length <= 0) return res.status(404).json({
            message: 'Categoria not found'
        });
        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        });
    }
};

exports.createCategoriaPregunta = async (req, res) => {
    const { nombre } = req.body;
    try {
        const [rows] = await pool.query('INSERT INTO categoriasPreguntas (nombre) VALUES (?)', [nombre]);
        res.send({
            id: rows.insertId,
            nombre
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        });
    }
};

exports.deleteCategoriaPregunta = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM categoriasPreguntas WHERE id = ?', [req.params.id]);
        if (result.affectedRows <= 0) return res.status(404).json({
            message: 'Categoria not found'
        });

        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        });
    }
};

exports.updateCategoriaPregunta = async (req, res) => {
    const { id } = req.params;
    const { nombre } = req.body;
    try {
        const result = await pool.query('UPDATE categoriasPreguntas SET nombre = IFNULL(?, nombre) WHERE id = ?', [nombre, id]);
        if (result.affectedRows === 0) return res.status(404).json({
            message: 'Categoria not found'
        });
        const [rows] = await pool.query('SELECT * FROM categoriasPreguntas WHERE id = ?', [id]);
        res.send(rows[0]);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Something goes wrong'
        });
    }
};
