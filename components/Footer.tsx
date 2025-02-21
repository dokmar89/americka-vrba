import Link from 'next/link';
import { FaFacebook, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import localFont from 'next/font/local';

const amberyGarden = localFont({
  src: '../fonts/Ambery Garden.ttf',
  variable: '--font-ambery-garden'
});

export default function Footer() {
  return (
    <footer className="bg-[#00a67e] text-white w-full">
      <div className="w-full px-4 py-16">
        {/* Hlavní grid s obsahem */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
          {/* Logo a popis */}
          <div className="space-y-4">
            <Link 
              href="/"
              className={`text-3xl font-medium text-[#71E496] ${amberyGarden.className}`}
            >
              AMERICKAVRBA.CZ
            </Link>
            <p className="text-white/90">
Máte zájem o spolupráci nebo velkoobchodní objednávky? Ozvěte se.</p>
<br></br>
            <a 
              href="https://www.facebook.com/people/Americk%C3%A1-vrba-pleten%C3%A1-CZ/61565484336195/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-[#71E496] hover:text-white/80 transition-colors duration-300"
            >
              <FaFacebook className="w-6 h-6 mr-2" />
              Sledujte nás na Facebooku
            </a>
          </div>

          {/* Navigace */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-[#71E496]">Rychlá navigace</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/90 hover:text-white transition-colors duration-300">
                  Úvod
                </Link>
              </li>
              <li>
                <Link href="/o-nas" className="text-white/90 hover:text-white transition-colors duration-300">
                  O nás
                </Link>
              </li>
              <li>
                <Link href="/objednavka" className="text-white/90 hover:text-white transition-colors duration-300">
                  Objednávka
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-white/90 hover:text-white transition-colors duration-300">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontaktní informace */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-[#71E496]">Kontaktujte nás</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <FaPhone className="w-5 h-5 mr-3" />
                <a href="tel:+420602668085" className="text-white/90 hover:text-white transition-colors">
                  +420 602 668 085
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="w-5 h-5 mr-3" />
                <a href="mailto:info@americkavrba.cz" className="text-white/90 hover:text-white transition-colors">
                  info@americkavrba.cz
                </a>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="w-5 h-5 mr-3 mt-1" />
                <span className="text-white/90">
                  Pačlavice 212<br />
                  768 34 Pačlavice
                </span>
              </li>
            </ul>
          </div>

          {/* Mapa */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-[#71E496]">Kde nás najdete</h4>
            <div className="w-full h-48 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2604.042404531224!2d17.16500587686391!3d49.256642172597275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4712fd6da2d9b64b%3A0x47d59ad9f0579bd!2sPa%C4%8Dlavice%20212%2C%20768%2034%20Pa%C4%8Dlavice!5e0!3m2!1scs!2scz!4v1740113048286!5m2!1scs!2scz"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale brightness-90 contrast-125"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="w-full mt-12 pt-8 border-t border-white/20">
          <div className="text-center text-white/80 text-sm max-w-7xl mx-auto">
            <p>&copy; {new Date().getFullYear()} Americká Vrba. Všechna práva vyhrazena.</p>
            <div className="mt-2">
              <Link 
                href="/zasady-ochrany-osobnich-udaju" 
                className="hover:text-white transition-colors duration-300"
              >
@fsk              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

