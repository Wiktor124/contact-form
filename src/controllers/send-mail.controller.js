import Router from "express";
import transporter from "../configs/transporter";
import config from "../configs/config";

const sendMailRouter = Router()

sendMailRouter.post('/', async (req, res) => {
  const { name, email, comment } = req.body;
  
    await transporter.sendMail({
    from: email, // sender address
    to: config.MAIL_TO, // list of receivers
    subject: "Hello ✔", // Subject line
    html: `
    <p>${comment}</p>

    `, // html body
  });
  
  res.redirect('index.html')
})
export default sendMailRouter;


