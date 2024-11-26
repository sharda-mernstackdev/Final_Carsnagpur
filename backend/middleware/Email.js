const { transporter } = require("./Email.config.js");
const { Verification_Email_Template, Welcome_Email_Template } = require("./EmailTemplate.js");

const sendVerificationEmail = async (email, verificationCode) => {
    try {
        const response = await transporter.sendMail({
            from: '"Pranav" <pranavbelorkar.1607@gmail.com>',
            to: email,
            subject: "Verify your Email",
            text: "Verify your Email",
            html: Verification_Email_Template.replace("{verificationCode}", verificationCode),
        });
        console.log('Email sent successfully', response);
    } catch (error) {
        console.log('Email error', error);
    }
};

const sendWelcomeEmail = async (email, name) => {
    try {
        const response = await transporter.sendMail({
            from: '"Pranav" <pranavbelorkar.1607@gmail.com>',
            to: email,
            subject: "Welcome to Our Community",
            text: "Hello, Customer",
            html: Welcome_Email_Template.replace("{name}", name),
        });
        console.log('Email sent successfully', response);
    } catch (error) {
        console.log('Email error', error);
    }
};

module.exports = {
    sendVerificationEmail,
    sendWelcomeEmail
};
