

const bodyParser = require("body-parser")
const express = require("express")
const nodemailer = require("nodemailer")
var cors = require('cors')
const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json())

const mailer = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
})
app.post("/contact", function (req, res) {
    console.log(req.body)
  mailer.sendMail(
    {
      from: req.body.from,
      to: [req.body.email],
      subject: req.body.name +" From " + req.body.company + " Wants to Contact " ,
      html: req.body.message ,   },
    function (err, info) {
      if (err) return res.status(500).send(err)
      res.json({ success: true })
    }
  )
})


app.post("/demo", function (req, res) {
    console.log(req.body)
  mailer.sendMail(
    {
      from: req.body.from,
      to: [req.body.email],
      subject: req.body.name + " Wants Demo " ,

      html:`<h1>Hello,</h1><br><h3>Website:${req.body.website}</h3><br>
      ${req.body.name} want to contact you for Demo.`  
    },
    function (err, info) {
      if (err) return res.status(500).send(err)
      res.json({ success: true })
    }
  )
})
app.listen(process.env.PORT||3000,()=>{
    console.log("Listening on port 3000")
})