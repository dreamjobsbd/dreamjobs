
// import nodemailer from "nodemailer";
// import { smtpUsername, smtpPassword } from "../hiddenEnv.js";


// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: smtpUsername,
//         pass: smtpPassword
//     },
//     debug: true, // Enable debug logs
//     logger: true // Log to console
// });

// const SendEmail = async (emailData) => {
//     try {
//         const { email, subject, html } = emailData;

//         console.log("Attempting to verify SMTP connection...");
//         await transporter.verify();
//         console.log("SMTP connection verified successfully");

//         console.log("Attempting to send email...");
//         const info = await transporter.sendMail({
//             from: smtpUsername,
//             to: email,
//             subject: subject,
//             html: html
//         });

//         console.log("Email sent successfully:", info.messageId);
//         return info;
//     } catch (error) {
//         console.error("Error in SendEmail Function:", error);
//         throw error;
//     }
// }


// export default SendEmail;