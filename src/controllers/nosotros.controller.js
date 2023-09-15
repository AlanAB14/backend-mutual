import { pool } from './../db.js'

export const getNosotros = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM nosotros')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })        
    }
}

export const updateNosotros = async (req, res) => {
    const { id } = req.params
    const { titulo, texto, video, selected } = req.body
    try {
        const result = await pool.query('UPDATE nosotros set titulo = IFNULL(?, titulo), texto = IFNULL(?, texto), video = IFNULL(?, video), selected = IFNULL(?, selected) WHERE id = ?', [titulo, texto, video, selected, id])
        if (result.affectedRows === 0) return res.status(404).json({
            message: 'Nosotros not found'
        })
        
        const [rows] = await pool.query('SELECT * FROM nosotros WHERE id = ?', [id])
    
        res.send(rows[0])
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: 'Something goes wrong'
        }) 
    }
}