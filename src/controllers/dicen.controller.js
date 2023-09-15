import { pool } from './../db.js'

export const getDicen = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM dicen')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })        
    }
}

export const updateDicen = async (req, res) => {
    const { id } = req.params
    const { titulo, texto, nombre, trabajo, imagen } = req.body
    try {
        const result = await pool.query('UPDATE dicen set titulo = IFNULL(?, titulo), texto = IFNULL(?, texto), nombre = IFNULL(?, nombre), trabajo = IFNULL(?, trabajo), imagen = IFNULL(?, imagen) WHERE id = ?', [ titulo, texto, nombre, trabajo, imagen, id])
        if (result.affectedRows === 0) return res.status(404).json({
            message: 'Dicen not found'
        })
        const [rows] = await pool.query('SELECT * FROM dicen WHERE id = ?', [id])
        res.send(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        }) 
    }
}