const path = require("path");
const router = require("express").Router();
const nodemailer = require("nodemailer");
const apiRoutes = require("./api");
require("dotenv").config();

// API Routes
router.use("/api", apiRoutes);

router.post("/send", function (req, res) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD
    }
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: `Service Request - ${req.body.device} ${req.body.brand}`,
    text: `
        Name: ${req.body.name}
        Email: ${req.body.email}
        Phone: ${req.body.phone}
        Address: ${req.body.address}

        Device: ${req.body.device}
        Brand: ${req.body.brand}
        age: ${req.body.age}
        ${req.body.problem}
    `
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.json(error)
    } else {
      console.log('Email sent: ' + info.response);
      res.json('Email sent: ' + info.response);
    }
  });
});

// If no API routes are hit, send the React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;