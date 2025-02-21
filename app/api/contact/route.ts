import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'wes1-smtp.wedos.net',
  port: 465,
  secure: true,
  auth: {
    user: 'info@americkavrba.cz',
    pass: process.env.EMAIL_PASSWORD
  }
});

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const emailTemplate = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #32A250;">Nová zpráva z kontaktního formuláře</h2>
        
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Od:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Zpráva:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      </div>
    `;

    // Email pro vás
    await transporter.sendMail({
      from: 'info@americkavrba.cz',
      to: 'info@americkavrba.cz',
      subject: `Nová zpráva od ${name}`,
      html: emailTemplate
    });

    // Automatická odpověď pro odesílatele
    await transporter.sendMail({
      from: 'info@americkavrba.cz',
      to: email,
      subject: 'Potvrzení přijetí zprávy - Americká vrba',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #32A250;">Děkujeme za Vaši zprávu</h2>
          <p>Vážený/á ${name},</p>
          <p>potvrzujeme přijetí Vaší zprávy. Budeme Vás kontaktovat co nejdříve.</p>
          <p style="color: #666;">S pozdravem,<br>Tým AMERICKAVRBA.CZ</p>
        </div>
      `
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Chyba při odesílání emailu' },
      { status: 500 }
    );
  }
} 