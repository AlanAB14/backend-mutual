import pkg  from "nodemailer";
const  nodemailer  = pkg;

export const postCorreo = async (req, res) => {
    const { from, subject, text } = req.body
    try {
        const config = {
            host: 'smtp.gmail.com',
            port: 587,
            auth: {
                user: 'alanbersia@gmail.com',
                pass: 'bqjm joqw zqbv nzfy'
            }
        }

        const mensaje = {
            from,
            to: 'casacentral@mutualentreasoc.com.ar',
            subject,
            text
        }
        const transport = nodemailer.createTransport(config);

        const info = await transport.sendMail(mensaje);

        console.log(info)
        return res.status(200).json({
            message: "Correo enviado"
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: error
        }) 
    }
}