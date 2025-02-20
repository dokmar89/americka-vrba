import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'wes1-smtp.wedos.net',
  port: 465,
  secure: true, // true pro port 465, false pro ostatní porty
  auth: {
    user: 'info@americkavrba.cz',
    pass: process.env.EMAIL_PASSWORD
  }
});

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { jmeno, email, telefon, ulice, mesto, psc, pocetKusu, doprava, platba, celkovaCena } = data;

    // Email pro zákazníka
    await transporter.sendMail({
      from: 'info@americkavrba.cz',
      to: email,
      subject: 'Potvrzení objednávky - Americká vrba pletená',
      html: `
        <h1>Děkujeme za Vaši objednávku!</h1>
        <p>Vážený/á ${jmeno},</p>
        <p>potvrzujeme přijetí Vaší objednávky americké vrby pletené.</p>
        
        <h2>Detaily objednávky:</h2>
        <ul>
          <li>Počet kusů: ${pocetKusu}</li>
          <li>Způsob dopravy: ${doprava === 'osobni' ? 'Osobní odběr' : 'Přepravní společnost'}</li>
          <li>Způsob platby: ${platba === 'prevod' ? 'Bankovní převod' : 'Dobírka'}</li>
          <li>Celková cena: ${celkovaCena} Kč</li>
        </ul>

        <h2>Dodací údaje:</h2>
        <p>${jmeno}<br>${ulice}<br>${mesto}<br>${psc}<br>Tel: ${telefon}</p>

        ${platba === 'prevod' ? `
        <h2>Platební údaje:</h2>
        <p>Číslo účtu: <strong>219161239/0300 (ČSOB)</strong></p>
        <p>Částka k úhradě: <strong>${celkovaCena} Kč</strong></p>
        <p>Do poznámky pro příjemce uveďte prosím vaše jméno a příjmení.</p>
        ` : ''}

        <p>V případě dotazů nás neváhejte kontaktovat.</p>
        <p>S pozdravem,<br>Tým AMERICKAVRBA.CZ</p>
      `
    });

    // Email pro vás
    await transporter.sendMail({
      from: 'info@americkavrba.cz',
      to: 'info@americkavrba.cz',
      subject: 'Nová objednávka - Americká vrba pletená',
      html: `
        <h1>Nová objednávka!</h1>
        <h2>Údaje zákazníka:</h2>
        <ul>
          <li>Jméno: ${jmeno}</li>
          <li>Email: ${email}</li>
          <li>Telefon: ${telefon}</li>
          <li>Adresa: ${ulice}, ${mesto}, ${psc}</li>
        </ul>
        <h2>Detaily objednávky:</h2>
        <ul>
          <li>Počet kusů: ${pocetKusu}</li>
          <li>Způsob dopravy: ${doprava === 'osobni' ? 'Osobní odběr' : 'Přepravní společnost'}</li>
          <li>Způsob platby: ${platba === 'prevod' ? 'Bankovní převod' : 'Dobírka'}</li>
          <li>Celková cena: ${celkovaCena} Kč</li>
       
          </ul>
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