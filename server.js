const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import cors

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // Use cors to allow cross-origin requests
app.use(bodyParser.json());

app.post('/send', (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'vijaynews50785@gmail.com',
      pass: 'Vijaydwivedi@82p',
    },
  });

  const mailOptions = {
    from: email,
    to: 'vijaynews50785@gmail.com',
    subject: `Message from ${name}`,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send({ error: 'Error sending email' });
    }
    res.status(200).send({ message: 'Email sent successfully' });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
