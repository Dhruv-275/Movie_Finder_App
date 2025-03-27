const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "dhruv3chauhan@gmail.com",
        pass: "nzgdsxunqjfzczhr"
    }
});

// Send the email
function sendMail(mailOptions) {
    transporter.sendMail(mailOptions, (error, info) => {
        // console.log("Sending email to:", mailOptions.to);
        // console.log("Mail subject:", mailOptions.subject);
        
        
        if (error) {
            console.error('❌ Error:', error.message);
        } else {
            console.log('✅ Email sent:', info.response);
        }
    });
}

module.exports = sendMail;