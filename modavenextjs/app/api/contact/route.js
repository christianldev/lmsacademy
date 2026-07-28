import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json();

    // Configura aquí tu servicio de correo
    const transporter = nodemailer.createTransport({
      host: "smtp-mail.outlook.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER, // Tu correo
        pass: process.env.EMAIL_PASS, // Tu contraseña o contraseña de aplicación
      },
      tls: {
        ciphers: "SSLv3",
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // A donde quieres que lleguen los mensajes
      subject: `🎵 Katty Elisa: Nuevo mensaje de aspirante - ${name}`,
      text: `Nombre: ${name}\nCorreo: ${email}\nAsunto: ${subject}\n\nMensaje:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
          <div style="text-align: center; margin-bottom: 20px;">
            <h2 style="color: #101112; margin: 0;">Katty Elisa</h2>
            <p style="color: #666; margin: 5px 0 0 0; font-size: 14px;">Notificación de Nuevo Aspirante</p>
          </div>
          
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #333; margin-top: 0; border-bottom: 2px solid #30eef5; padding-bottom: 10px;">Detalles del Contacto</h3>
            <p style="margin-bottom: 8px;"><strong>🗣️ Nombre:</strong> ${name}</p>
            <p style="margin-bottom: 8px;"><strong>✉️ Email:</strong> <a href="mailto:${email}" style="color: #0066cc;">${email}</a></p>
            <p style="margin-bottom: 8px;"><strong>📌 Asunto:</strong> ${subject}</p>
          </div>

          <div style="background-color: #ffffff; padding: 15px; border: 1px solid #eee; border-left: 4px solid #8eff3f; border-radius: 4px;">
            <h4 style="color: #444; margin-top: 0;">Mensaje:</h4>
            <p style="color: #333; line-height: 1.6; white-space: pre-wrap; font-style: italic;">"${message}"</p>
          </div>
          
          <div style="margin-top: 30px; text-align: center; font-size: 12px; color: #999; border-top: 1px solid #eee; padding-top: 20px;">
            <p>Este correo fue generado automáticamente desde la web de Katty Elisa.</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}
