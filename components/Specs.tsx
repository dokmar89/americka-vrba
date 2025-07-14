import Image from "next/image"

export default function Specs() {
  return (
    <section className="specs-section" id="produkty">
      <h2 className="section-title">SPECIFIKACE</h2>
      <div className="specs-container">
        <div className="specs-image-container">
          <Image 
            src="/product-Photoroom.png" 
            alt="Vrba americká" 
            width={500} 
            height={500} 
            className="specs-image"
          />
        </div>
        
        <div className="specs-box specs-top">
          <div className="specs-title">TO NEJDŮLEŽITĚJŠÍ</div>
          <div className="specs-content">
            <strong>Zapletená vrba americká</strong><br />
            <strong>Výška:</strong> 150-160cm<br />
            <strong>Cena:</strong> 749 Kč / ks<br />
            <strong>Doprava:</strong> 299 Kč / objednávka<br />
            (max 2 ks v jedné objednávce)<br />
            <strong>Dobírka:</strong> 45 Kč / objednávka<br />
            Osobní odběr možný v sídle firmy
          </div>
        </div>

        <div className="specs-box specs-right">
          <div className="specs-title">KDE VYSADIT?</div>
          <div className="specs-content">
            Preferuje vlhké půdy<br />
            Snáší městské prostředí<br />
            Odolná vůči mrazu
          </div>
        </div>

        <div className="specs-box specs-bottom">
          <div className="specs-title">CO S NIMI?</div>
          <div className="specs-content">
            Zpevňování břehů<br />
            Okrasné účely<br />
            Včelařství
          </div>
        </div>

        <div className="specs-box specs-left">
          <div className="specs-title">JAK SE STARAT?</div>
          <div className="specs-content">
            Pravidelná zálivka<br />
            Na začátku zimy pro kontrolovanou výšku zastřihávejte<br />
            Minimální nároky na údržbu
          </div>
        </div>
      </div>
    </section>
  )
}

