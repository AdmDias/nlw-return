import nodemailer from 'nodemailer'
import { Mail, SendMailData } from "../mail";

var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "",
      pass: ""
    }
});

export class NodemailerMail implements Mail {
    async sendMail({ subject, body }: SendMailData) {
        const mailOptions = {
            from: 'Equipe Feedget <feedget-team@feedget.com>',
            to: 'Ademir <adm.junior.foz@gmail.com>',
            subject,
            html: body,
        };

        await transport.sendMail(mailOptions)
    };
}