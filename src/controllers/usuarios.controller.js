import { pool } from "../db.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { SECRET_KET } from "../config.js";

export const registerUsuario = async (req, res) => {
    const { user, password } = req.body;
    if (!user || !password) {
        return res.status(400).json({ mensaje: 'Todos los campos son obligatorios' });
    }
    try {
        const [rowsUser] = await pool.query('SELECT * FROM usuarios WHERE user = ?', [user]);
        if (rowsUser.length === 0) {
            const hashPass = bcrypt.hashSync(password, 10)
            const [rows] = await pool.query('INSERT INTO usuarios (user ,password) VALUES (?, ?)', [user, hashPass])
            if (rows.insertId) {
                const token = jwt.sign({ user }, SECRET_KET, { expiresIn: '24h' });
                res.status(200).send({
                    id: rows.insertId,
                    token
                })
            } else {
                return res.status(400).json({
                    message: 'No se pudo registrar usuario'
                })
            }
        } else {
            return res.status(400).json({
                message: 'El nombre de usuario ya existe'
            })
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}

export const loginUsuario = async (req, res) => {
    const { user, password } = req.body;
    if (!user || !password) {
        return res.status(400).json({ mensaje: 'Todos los campos son obligatorios' });
    }
    try {
        const [rowsUser] = await pool.query('SELECT * FROM usuarios WHERE user = ?', [user]);
        if (rowsUser.length !== 0) {
            const coincide = bcrypt.compareSync(password, rowsUser[0].password);
            if (!coincide) {
                return res.status(401).json({ mensaje: 'Contraseña incorrecta' });
            }
            const newUser = {
                user,
                password
            };
            const token = jwt.sign({newUser}, SECRET_KET, { expiresIn: '24h' });
            res.status(200).json({ mensaje: 'Inicio de sesión exitoso', token });
        } else {
            return res.status(400).json({
                message: 'El usuario no existe'
            })
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}