import { error } from './../../node_modules/ajv/lib/vocabularies/applicator/dependencies';
import nodemailer from "nodemailer"



export const sendEmail = async ({ email, emailType, userId }) => {
    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: true, // true for port 465, false for other ports
            auth: {
                user: "REPLACE_WITH_YOUR_ALIAS@YOURDOMAIN.COM",
                pass: "REPLACE_WITH_YOUR_GENERATED-PASSWORD",
            },
        });



        const mailOptions = {
            from: 'zona@shoaib.com', // sender address
            to: email,// list of receivers
            subject: emailType === 'VERIFY' ? "VERIFY YOUR email" : "Resend your password",
            text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>", // html body
        }
    } catch (error) {

    }
}