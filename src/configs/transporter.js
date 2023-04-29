import nodemailer from 'nodemailer'
import config from './config'

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: config.MAIL_FROM, // generated ethereal user
    pass: config.MAIL_FROM_PASSWORD, // generated ethereal password
  },
})

transporter.verify().then(() => console.log('Ready!'))

export default transporter;