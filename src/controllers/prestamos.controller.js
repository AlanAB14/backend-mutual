import { pool } from './../db.js'

export const getPrestamos = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM prestamos')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })        
    }
}

export const getPrestamo = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM prestamos WHERE id = ?', [req.params.id])
        if (rows.length <= 0) return res.status(404).json({
            message: 'Prestamo not found'
        })
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        }) 
    }
}

export const createPrestamo = async (req, res) => {
    const { tipo, data } = req.body;
    try {
        const fecha = new Date();
        const [rows] = await pool.query('INSERT INTO prestamos (tipo ,data, fecha) VALUES (?, ?, ?)', [ tipo, data, fecha ])
        res.send({
            id: rows.insertId,
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: 'Something goes wrong.'
        }) 
    }

}

export const deletePrestamo = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM prestamos WHERE id = ?', [req.params.id])
        if (result.affectedRows <= 0) return res.status(404).json({
            message: 'Prestamo not found'
        })
    
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        }) 
    }

}


