const express = require("express");
require('dotenv').config()
const nodemailer = require('nodemailer')
const cors = require("cors");
const app = express();
const port = 3000;

app.use(express.json());

// Enable CORS for your frontend URL (change to your actual frontend URL)
const corsOptions = {
  origin: "http://localhost:5173", // Change this to match your frontend URL
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OUATH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
  },
});

app.post("/send-email", (req, res) => {
  const formData = req.body;

  let mailDetailsCompany = {
    from: 'info@dirtdetox.co.nz',
    to: 'info@dirtdetox.co.nz',
    subject: 'Contact Form Submission Received',
    text: `
      Name: ${formData.name}
      Email: ${formData.email}
      Phone Number: ${formData.phoneNumber}
      Message: ${formData.message}
    `,
  };

  let mailDetailsClient = {
    from: 'info@dirtdetox.co.nz',
    to: formData.email,
    subject: 'Thank You for Contacting Us',
    text: 'Thank you for your inquiry. We will get back to you as soon as possible.',
  };

  transporter.sendMail(mailDetailsCompany, function (err, data) {
    if (err) {
      console.log("An error has occurred sending email to company", err);
      res.status(500).json({ success: false, error: err.message });
    } else {
      console.log('Email sent successfully to company');
    }
  });

  transporter.sendMail(mailDetailsClient, function (err, data) {
    if (err) {
      console.log("An error has occurred sending email to client", err);
      res.status(500).json({ success: false, error: err.message });
    } else {
      console.log('Email sent successfully to client');
      res.status(200).json({ success: true });
    }
  });
});

app.listen(port, () => {
  console.log(`Nodemailer is currently listening at http://localhost:${port}`);
});
