import 'dotenv/config'

const config = Object.freeze({
  PORT: process.env.PORT,
  MAILER_PORT: process.env.MAILER_PORT,
  MAIL_FROM: process.env.MAIL_FROM,
  MAIL_FROM_PASSWORD: process.env.MAIL_FROM_PASSWORD,
  MAIL_TO: process.env.MAIL_TO
})

export default config