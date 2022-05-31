/* eslint-disable import/no-anonymous-default-export */
import nodemailer from "nodemailer";

export default async (req, res) => {
  const { name, email, message } = req.body;
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD
    },
    tls: {
      rejectUnauthorized: false
  }
  });

  try {
    await transporter.sendMail({
      from: email,
      to: "emilianotosardev@gmail.com",
      subject: `Mensaje de ${name}`,
      html: `
        <p><strong>Email: </strong> ${email}</p><br>
        <p><strong>Mensaje: </strong> ${message}</p><br>
      `
    });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
  return res.status(200).json({ error: "" });
};
