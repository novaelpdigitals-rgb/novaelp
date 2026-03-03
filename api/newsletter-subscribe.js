import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { email } = req.body ?? {};

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const toAddress = process.env.NEWSLETTER_TO || process.env.DEMO_REQUEST_TO || "novaelpdigitals@gmail.com";

    await transporter.sendMail({
      from: `"Novaelp Website" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: toAddress,
      subject: "New Novaelp Newsletter Subscription",
      text: `A new email subscribed to the Novaelp newsletter:\n\nEmail: ${email}`,
      replyTo: email,
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Error sending newsletter subscription:", error);
    return res.status(500).json({ error: "Failed to send newsletter subscription" });
  }
}

