const nodemailer = require("nodemailer");
const sendEmail = async(options) =>{
     const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      // port: 587,
      // secure: true,
      auth:{
        user: process.env.REAL_EMAIL_ID,
        pass: process.env.REAL_PASSWORD
      }
     });
     const  mailOption = {
        from : "Xf Text Editor <noreply.registration.xf>",
        to : options.email,
        subject : options.subject,
        text : options.message,
        html : options.html
      }
      await transporter.sendMail(mailOption,(error, info) => {
        if (error) {
          console.error(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
}
module.exports = sendEmail;
