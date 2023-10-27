import { pool } from '../db.js'

export const getHeader = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM header')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })        
    }
}

export const getHeaderSolo = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM header WHERE id = ?', [req.params.id])
        if (rows.length <= 0) return res.status(404).json({
            message: 'Header not found'
        })
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        }) 
    }
}

export const createHeader = async (req, res) => {
    const { titulo, image } = req.body;
    try {
        const [rows] = await pool.query('INSERT INTO header (titulo ,image) VALUES (?, ?)', [ titulo, image ])
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

export const updateHeader = async (req, res) => {
    const { id } = req.params
    const { titulo, image } = req.body
    try {
        const result = await pool.query('UPDATE header set titulo = IFNULL(?, titulo), image = IFNULL(?, image) WHERE id = ?', [titulo, image, id])
        if (result.affectedRows === 0) return res.status(404).json({
            message: 'Header not found'
        })
        
        const [rows] = await pool.query('SELECT * FROM header WHERE id = ?', [id])
    
        res.send(rows[0])
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: 'Something goes wrong'
        }) 
    }
}

export const deleteHeader = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM header WHERE id = ?', [req.params.id])
        if (result.affectedRows <= 0) return res.status(404).json({
            message: 'Header not found'
        })
    
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        }) 
    }

}


