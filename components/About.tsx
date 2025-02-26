import Image from "next/image"

export default function About() {
  return (
    <section className="about-section" id="o-nas">
      <div className="about-image">
          {/* Optimalizuj obrázek pomocí next/image */}
          <Image
            src="/galerie/vrba_americka_1.jpg"
            alt="O nás - Pletené vrby"
            width={600}  // Zadej *skutečnou* šířku obrázku
            height={400} // Zadej *skutečnou* výšku obrázku
            // Další props, pokud je potřeba:
            // placeholder="blur"  // Rozmazání při načítání
            // blurDataURL="..."  // Data URL pro rozmazání (pokud používáš placeholder="blur")
            // priority          // Pokud je obrázek v horní části stránky (above the fold)
          />
      </div>
      <div className="about-content">
        <h1 className="section-title">O NÁS - AMERICKÁ VRBA</h1>
        <p>
          Více než desetiletí vytváříme přírodní umění, které přináší čistý
          design a harmonii do vašeho venkovního prostoru. Jako rodinná firma se
          specializujeme na pěstování a prodej zaplétané vrby americké.
          Spojujeme tradiční řemeslo se současným stylem života – naše ručně
          pletené vrby jsou dokonalým prvkem pro minimalistické zahrady, městské
          terasy i rozlehlé venkovní prostory vyžadujících krásu a designový
          styl.
        </p>
        <div className="about-features">
          <div className="feature-item">
            <i className="feature-icon">🌱</i>
            <div className="feature-item-content">
              <h2 className="feature-title">DESIGN MEETS NATURE</h2>
              <p>
                Propojujeme tradiční řemeslo s moderní architekturou. Naše vrby
                se stanou ikonickou součástí vašeho venkovního prostoru.
              </p>
            </div>
          </div>
          <div className="feature-item">
            <i className="feature-icon">🤝</i>
            <div className="feature-item-content">
              <h2 className="feature-title">VÁŠ PARTNER PRO STYLOVÝ OUTDOOR DESIGN</h2>
              <p>
                Řešení přesně pro váš lifestyle – ať už jde o městskou terasu,
                střešní zahradu nebo jiný pozemek. Váš prostor, vaše pravidla.
              </p>
            </div>
          </div>
          <div className="feature-item">
            <i className="feature-icon">🌿</i>
            <div className="feature-item-content">
              <h2 className="feature-title">PRÉMIOVÁ KVALITA</h2>
              <p>
                Pracujeme výhradně s nejkvalitnějšími odrůdami vrb, které
                splňují vysoké nároky moderního zahradního designu. Nadčasová
                elegance v každém detailu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}