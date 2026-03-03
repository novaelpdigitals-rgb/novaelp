import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const {
    firstName,
    lastName,
    email,
    jobTitle,
    organization,
    phone,
    schoolLevel,
    studentCount,
    country,
    message,
  } = req.body ?? {};

  if (!email || !firstName || !lastName) {
    return res.status(400).json({ error: "Missing required fields" });
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

    const toAddress = process.env.DEMO_REQUEST_TO || "novaelpdigitals@gmail.com";

    const subject = "New Novaelp Demo Request";

    const text = [
      "A new demo request was submitted from the Novaelp website:",
      "",
      `First Name: ${firstName}`,
      `Last Name: ${lastName}`,
      `Work Email: ${email}`,
      `Job Title: ${jobTitle || ""}`,
      `School / Organization: ${organization || ""}`,
      `Phone Number: ${phone || ""}`,
      `School Level: ${schoolLevel || ""}`,
      `Number of Students: ${studentCount || ""}`,
      `Country: ${country || ""}`,
      "",
      "How can we help?",
      message || "",
    ].join("\n");

    await transporter.sendMail({
      from: `"Novaelp Website" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: toAddress,
      replyTo: email,
      subject,
      text,
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Error sending demo request email:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}

