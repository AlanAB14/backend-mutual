import { pool } from '../db.js'

export const getIntereses = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM intereses')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })        
    }
}

export const updateIntereses = async (req, res) => {
    const { id } = req.params
    const { tipo, interes } = req.body
    try {
        const result = await pool.query('UPDATE intereses set tipo = IFNULL(?, tipo), interes = IFNULL(?, interes) WHERE id = ?', [tipo, interes, id])
        if (result.affectedRows === 0) return res.status(404).json({
            message: 'Interes not found'
        })
        
        const [rows] = await pool.query('SELECT * FROM intereses WHERE id = ?', [id])
    
        res.send(rows[0])
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: 'Something goes wrong'
        }) 
    }
}