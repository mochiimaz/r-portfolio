import nodemailer from 'nodemailer';
import cors from 'cors';

// Initialize CORS middleware
const corsHandler = cors({ origin: "*" });; // อนุญาตทุก origin (สำหรับ Vercel)

export default function handler(req, res) {
  // ใช้ corsHandler กับ request และ response
  corsHandler(req, res, async () => {
    if (req.method !== "POST") {
      return res.status(405).json({ message: "Method Not Allowed" });
    }

    try {
      const { firstName, lastName, company, phone, email, website, message } =
        req.body;

      // 1. ตั้งค่า transporter (ผู้ส่งอีเมล)
      // แนะนำให้ใช้บริการ transactional email เช่น SendGrid, Mailgun
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          // eslint-disable-next-line no-undef
          user: process.env.EMAIL_USER, // อีเมลของคุณที่ใช้ส่ง
          // eslint-disable-next-line no-undef
          pass: process.env.EMAIL_APP_PASSWORD, // App Password ที่สร้างจาก Google Account
        },
      });

      // 2. ตั้งค่ารายละเอียดอีเมล (ผู้รับ, หัวข้อ, เนื้อหา)
      const mailOptions = {
        from: `"${firstName} ${lastName}" <${email}>`, // ผู้ส่ง (จากฟอร์ม)
        to: process.env.EMAIL_RECEIVER, // อีเมลของคุณที่จะรับข้อความ
        subject: `New Contact Form Submission from ${company}`,
        html: `
          <h1>New Contact Request Portfolio</h1>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Company:</strong> ${company}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Website:</strong> ${website || ""}</p>
          <hr />
          <p><strong>Message:</strong> ${(message || "").replace(
            /\n/g,
            "<br>"
          )}</p>
        `,
      };

      // 3. ส่งอีเมล
      await transporter.sendMail(mailOptions);

      res
        .status(200)
        .json({ success: true, message: "Email sent successfully!" });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ success: false, message: "Failed to send email." });
    }
  });
}
