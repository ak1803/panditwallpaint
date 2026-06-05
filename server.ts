import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

app.post("/api/contact", async (req: express.Request, res: express.Response) => {
  const { name, email, phone, projectDetails } = req.body as {
    name: string;
    email: string;
    phone: string;
    projectDetails: string;
  };

  if (!name || !email || !phone || !projectDetails) {
    res.status(400).json({ error: "All fields are required." });
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    res.status(400).json({ error: "Invalid email address." });
    return;
  }

  try {
    await transporter.sendMail({
      from: `"Contact Form" <${process.env.GMAIL_USER}>`,
      to: "akshayjejurkar18@gmail.com",
      replyTo: email,
      subject: `New Project Inquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e5e7eb; border-radius: 8px;">
          <h2 style="color: #111827; margin-bottom: 24px; border-bottom: 2px solid #f59e0b; padding-bottom: 12px;">
            New Contact Form Submission
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="background: #f9fafb;">
              <td style="padding: 12px 16px; font-weight: 600; color: #374151; width: 35%;">Full Name</td>
              <td style="padding: 12px 16px; color: #111827;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 16px; font-weight: 600; color: #374151;">Email Address</td>
              <td style="padding: 12px 16px; color: #111827;"><a href="mailto:${email}" style="color: #f59e0b;">${email}</a></td>
            </tr>
            <tr style="background: #f9fafb;">
              <td style="padding: 12px 16px; font-weight: 600; color: #374151;">Phone Number</td>
              <td style="padding: 12px 16px; color: #111827;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 12px 16px; font-weight: 600; color: #374151; vertical-align: top;">Project Details</td>
              <td style="padding: 12px 16px; color: #111827; white-space: pre-wrap;">${projectDetails}</td>
            </tr>
          </table>
          <p style="margin-top: 24px; font-size: 12px; color: #9ca3af;">
            Submitted on ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST
          </p>
        </div>
      `,
    });

    res.json({ success: true, message: "Your message has been sent successfully!" });
  } catch (error: unknown) {
    const err = error as Error;
    console.error("Email send error:", err.message);
    res.status(500).json({ error: "Failed to send email. Please try again later." });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server running at http://localhost:${PORT}`);
});
