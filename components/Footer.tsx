import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>AMERICKAVRBA.CZ</h3>
          <p>Máte zájem o spolupráci nebo velkoodběr? Ozvěte se nám!</p>
          <a 
            href="https://www.facebook.com/people/Americk%C3%A1-vrba-pleten%C3%A1-CZ/61565484336195" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
          >
            <div className="facebook-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/>
              </svg>
            </div>
          </a>
        </div>

        <div className="footer-section">
          <h4>Rychlé odkazy</h4>
          <ul>
            <li><a href="#domu">Domů</a></li>
            <li><a href="#o-nas">O nás</a></li>
            <li><a href="#vyhody">Výhody</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Informace</h4>
          <ul>
            <li><a href="#pece">Návod</a></li>
            <li><a href="#galerie">Galerie</a></li>
            <li><a href="#kontakt">Kontakt</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Kontakt</h4>
          <ul>
            <li>
              <a href="tel:+420602668085" className="contact-link">
                <span className="icon">📞</span>
                +420 602 668 085
              </a>
            </li>
            <li>
              <a href="mailto:mifran.oil@seznam.cz" className="contact-link">
                <span className="icon">✉️</span>
                mifran.oil@seznam.cz
              </a>
            </li>
            <li>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="contact-link">
                <span className="icon">📍</span>
                Pačlavice 212, 768 34 Pačlavice
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 AMERICKAVRBA.CZ | Všechna práva vyhrazena | @fsk</p>
      </div>
    </footer>
  );
}

