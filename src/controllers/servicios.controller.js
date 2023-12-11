const { pool } = require('./../db.js');

exports.getServicios = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM servicios');
        res.json(rows);
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        });
    }
};

exports.getServicio = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM servicios WHERE id = ?', [req.params.id]);
        if (rows.length <= 0) return res.status(404).json({
            message: 'Servicio not found'
        });
        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        });
    }
};

exports.createServicio = async (req, res) => {
    const { titulo, url, icon, image, texto, caracteristicas, selected = false } = req.body;
    try {
        const [rows] = await pool.query('INSERT INTO servicios (titulo ,url, icon, image, texto, caracteristicas, selected) VALUES (?, ?, ?, ?, ?, ?, ?)', [titulo, url, icon, image, texto, caracteristicas, selected]);
        res.send({
            id: rows.insertId,
            titulo
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        });
    }
};

exports.deleteServicio = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM servicios WHERE id = ?', [req.params.id]);
        if (result.affectedRows <= 0) return res.status(404).json({
            message: 'Servicio not found'
        });

        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        });
    }
};

exports.updateServicio = async (req, res) => {
    const { id } = req.params;
    const { titulo, url, icon, image, texto, caracteristicas, selected } = req.body;
    try {
        const result = await pool.query('UPDATE servicios set titulo = IFNULL(?, titulo), url = IFNULL(?, url), icon = IFNULL(?, icon), image = IFNULL(?, image), texto = IFNULL(?, texto), caracteristicas = IFNULL(?, caracteristicas), selected = IFNULL(?, selected) WHERE id = ?', [titulo, url, icon, image, texto, caracteristicas, selected, id]);
        if (result.affectedRows === 0) return res.status(404).json({
            message: 'Servicio not found'
        });

        const [rows] = await pool.query('SELECT * FROM servicios WHERE id = ?', [id]);

        res.send(rows[0]);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Something goes wrong'
        });
    }
};
