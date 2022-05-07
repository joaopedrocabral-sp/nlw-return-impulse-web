import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer"

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "e31d311c979eaf",
      pass: "173f1bfd54dcfe"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
        from: "Equipe Feedget <oi@feedget.com>",
        to: "João Pedro <cabralzinhooo14@gmail.com>",
        subject,
        html: body,
    })
    }
}