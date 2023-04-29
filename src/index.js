import path from "path";
import config from "./configs/config";
import express from 'express'
import sendMailRouter from "./controllers/send-mail.controller";

const app = express()

app.use(express.urlencoded({ extended: false}))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json());
app.use('/send', sendMailRouter);


app.get('/', (req, res) => {
  res.sendFile('index.html')
})

app.listen(config.PORT, () => console.log('Server on port', config.PORT))
