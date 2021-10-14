// const bodyParser = require("body-parser")
// const express = require("express")
// const nodemailer = require("nodemailer")

// const app = express()
// app.use(bodyParser.urlencoded())

// const contactAddress = "contato@beabc.ca"

// const mailer = nodemailer.createTransport({
//   service: "Hostgator",
//   auth: {
//     user: process.env.production.HOSTGATOR_ADDRESS,
//     pass: process.env.production.HOSTGATOR_PASSWORD,
//   },
// })

// app.post("/contact", function (req, res) {
//   mailer.sendMail(
//     {
//       from: req.body.from,
//       to: [contactAddress],
//       subject: req.body.subject || "[No subject]",
//       html: req.body.message || "[No message]",
//     },
//     function (err, info) {
//       if (err) return res.status(500).send(err)
//       res.json({ success: true })
//     }
//   )
// })

// app.listen(3000)