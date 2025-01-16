const dotenv = require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    },
});

const emailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: 'Test Email from Node Mailer!',
    email: 'Hello this is a test email from nodejs using the node mailer',
};

transporter.sendMail(emailOptions, (err, info) => {
    if (err) {
        return console.log(err.message);
    }
    console.log('Email sent sucessfully: ', info.response);
})