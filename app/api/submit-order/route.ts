import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const CENA_ZA_KUS = 890;

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
    const data = await req.json();
    const { 
      jmeno, 
      email, 
      telefon, 
      ulice, 
      mesto, 
      psc, 
      pocetKusu, 
      doprava, 
      platba, 
      celkovaCena,
      promoKod,
      sleva 
    } = data;

    const cenaProduktu = Number(pocetKusu) * CENA_ZA_KUS;
    const cenaDopravy = doprava === "prepravni" ? 
      (pocetKusu <= 2 ? 299 : pocetKusu <= 4 ? 598 : 897) : 0;
    const cenaDobirky = platba === "dobirka" ? 
      (pocetKusu <= 2 ? 45 : pocetKusu <= 4 ? 90 : 135) : 0;

    const emailTemplate = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #32A250; text-align: center;">Děkujeme za Vaši objednávku!</h1>
        <p>Vážený/á ${jmeno},</p>
        <p>potvrzujeme přijetí Vaší objednávky americké vrby pletené.</p>
        
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h2 style="color: #333; margin-top: 0;">Detaily objednávky:</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0;">Počet kusů:</td>
              <td style="text-align: right;"><strong>${pocetKusu} ks</strong></td>
            </tr>
            <tr>
              <td style="padding: 8px 0;">Cena za kus:</td>
              <td style="text-align: right;"><strong>${CENA_ZA_KUS} Kč</strong></td>
            </tr>
            <tr>
              <td style="padding: 8px 0;">Cena celkem za zboží:</td>
              <td style="text-align: right;"><strong>${cenaProduktu} Kč</strong></td>
            </tr>
            ${sleva > 0 ? `
            <tr style="color: #32A250;">
              <td style="padding: 8px 0;">Sleva (${promoKod}):</td>
              <td style="text-align: right;"><strong>-${sleva} Kč</strong></td>
            </tr>
            <tr>
              <td style="padding: 8px 0;">Cena po slevě:</td>
              <td style="text-align: right;"><strong>${cenaProduktu - sleva} Kč</strong></td>
            </tr>
            ` : ''}
            ${cenaDopravy ? `
            <tr>
              <td style="padding: 8px 0;">Doprava:</td>
              <td style="text-align: right;"><strong>${cenaDopravy} Kč</strong></td>
            </tr>
            ` : ''}
            ${cenaDobirky ? `
            <tr>
              <td style="padding: 8px 0;">Dobírka:</td>
              <td style="text-align: right;"><strong>${cenaDobirky} Kč</strong></td>
            </tr>
            ` : ''}
            <tr style="border-top: 2px solid #ddd;">
              <td style="padding: 12px 0;"><strong>Celková cena:</strong></td>
              <td style="text-align: right;"><strong>${celkovaCena} Kč</strong></td>
            </tr>
          </table>
        </div>

        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h2 style="color: #333; margin-top: 0;">Dodací údaje:</h2>
          <p style="margin: 0;">
            ${jmeno}<br>
            ${ulice}<br>
            ${mesto}<br>
            ${psc}<br>
            Tel: ${telefon}<br>
            Email: ${email}
          </p>
        </div>

        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h2 style="color: #333; margin-top: 0;">Způsob dopravy:</h2>
          <p style="margin: 0;"><strong>${doprava === 'osobni' ? 'Osobní odběr' : 'Přepravní společnost'}</strong></p>
        </div>

        ${platba === 'prevod' ? `
        <div style="background-color: #fff3cd; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h2 style="color: #333; margin-top: 0;">Platební údaje:</h2>
          <p style="margin: 0;">
            Číslo účtu: <strong>219161239/0300 (ČSOB)</strong><br>
            Částka k úhradě: <strong>${celkovaCena} Kč</strong><br>
            <em>Do poznámky pro příjemce uveďte prosím vaše jméno a příjmení.</em>
          </p>
        </div>
        ` : ''}

        <p style="margin-top: 20px;">V případě dotazů nás neváhejte kontaktovat na info@americkavrba.cz</p>
        <p style="color: #666;">S pozdravem,<br>Tým AMERICKAVRBA.CZ</p>
      </div>
    `;

    // Email pro zákazníka
    await transporter.sendMail({
      from: 'info@americkavrba.cz',
      to: email,
      subject: 'Potvrzení objednávky - Americká vrba pletená',
      html: emailTemplate
    });

    // Email pro administrátora - stručný souhrn objednávky
    const adminEmailTemplate = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2>Nová objednávka - Souhrn</h2>
        
        <h3>Kontaktní údaje:</h3>
        <ul>
          <li>Jméno: ${jmeno}</li>
          <li>Email: ${email}</li>
          <li>Telefon: ${telefon}</li>
        </ul>

        <h3>Doručovací adresa:</h3>
        <ul>
          <li>Ulice: ${ulice}</li>
          <li>Město: ${mesto}</li>
          <li>PSČ: ${psc}</li>
        </ul>

        <h3>Detaily objednávky:</h3>
        <ul>
          <li>Počet kusů: ${pocetKusu}</li>
          <li>Způsob dopravy: ${doprava === 'osobni' ? 'Osobní odběr' : 'Přepravní společnost'}</li>
          <li>Způsob platby: ${platba === 'prevod' ? 'Bankovní převod' : 'Dobírka'}</li>
          ${promoKod ? `<li>Použitý promo kód: ${promoKod}</li>` : ''}
          ${sleva > 0 ? `<li>Uplatněná sleva: ${sleva} Kč</li>` : ''}
          <li>Celková cena: ${celkovaCena} Kč</li>
        </ul>
      </div>
      <br>
      <br>

    `;

    await transporter.sendMail({
      from: 'info@americkavrba.cz',
      to: 'info@americkavrba.cz',
      subject: `Nová objednávka - ${jmeno}`,
      html: adminEmailTemplate
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