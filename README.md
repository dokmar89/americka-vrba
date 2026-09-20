# Americká vrba — produktový a poptávkový web

Český produktový web pro americkou vrbu: informace o rostlinách, péče, galerie a objednávkové či kontaktní formuláře.

**Stav:** Zdrojový kód webu do portfolia; doručování e-mailů a produkční provoz vyžadují ověření konkrétního nasazení.

## Co projekt obsahuje

- Výhody produktu, parametry, péče, odpovědi na časté otázky a galerie.
- Objednávkový formulář a modální okno.
- Serverové cesty Next.js pro kontaktní zprávy a objednávky s knihovnou Nodemailer.
- Rozhraní souhlasu s cookies a opakovaně použitelné sekce stránky.

## Technologie

Next.js, React, TypeScript, Tailwind CSS, Nodemailer.

## Architektura a struktura

- `app/page.tsx` — sestavení úvodní stránky
- `components/` — produktové sekce, galerie a formuláře
- `app/api/contact/route.ts` — odesílání kontaktních e-mailů
- `app/api/submit-order/route.ts` — odesílání objednávek e-mailem
- `app/api/images/route.ts` — rozhraní pro seznam obrázků

## Lokální vývoj

Potřebujete Node.js a npm. V kořenové složce repozitáře spusťte:

```sh
npm install
npm run dev
```

Příkaz pro sestavení uvedený v projektu: `npm run build`.

Jde o příkazy deklarované v repozitáři, nikoli o potvrzení úspěšného sestavení. Instalace závislostí, sestavení ani napojení na živé služby nebyly při úpravě dokumentace spuštěny.

## Konfigurace a omezení

Oba e-mailové handlery čtou na serveru `EMAIL_PASSWORD`. Před testováním zkontrolujte nastavení SMTP, odesílatele a příjemce a použijte oprávněnou testovací schránku; identifikátory konkrétních účtů zde nejsou uvedeny. Heslo nikdy neukládejte do Gitu. Objednávkový formulář sám o sobě nedokládá zpracování plateb ani systém správy objednávek.

Vývojový skript naslouchá na `0.0.0.0`. Pro náhled dostupný pouze z vlastního počítače použijte `npx next dev -H 127.0.0.1`. V repozitáři je více konfigurací Next.js; před nasazením ověřte, která se skutečně použije.

## Přínos pro portfolio

Ukazuje cestu od prezentace produktu k serverovému zpracování poptávky a oddělení veřejného rozhraní od přihlašovacích údajů pošty.

## Co doplnit do dokumentace

Snímky obrazovky s fiktivními daty, opakovatelný postup ověření a přehled skutečně otestovaných integrací. Přihlašovací údaje a konfigurace konkrétního nasazení patří mimo Git.
