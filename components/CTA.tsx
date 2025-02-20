"use client"
import { useState } from 'react';
import Image from 'next/image';
import OrderForm from './OrderForm';

export default function CTA() {
  const [showOrderForm, setShowOrderForm] = useState(false);

  return (
    <>
      <section className="cta-section">
        <div className="cta-container">
          <div className="cta-content">
            <h2>Proměňte svůj prostor v přírodní umění</h2>
            <p>
              Objevte kouzlo živého designu. Naše ručně pletené vrby spojují minimalistickou eleganci s přírodní krásou a promění váš venkovní prostor v jedinečné místo pro relaxaci. Naplánujme společně váš zen.
              Dodání po celé ČR nebo osobní odběr v sídle firmy.
            </p>
            <div className="cta-buttons">
              <button 
                onClick={() => setShowOrderForm(true)}
                className="btn btn-primary"
              >
                Objednat nyní
              </button>
              <a href="#kontakt" className="btn btn-secondary">Kontaktujte nás</a>
            </div>
          </div>
          <div className="cta-image">
            <Image
              src="/galerie/vrba_americka_6.jpg"
              alt="Americká vrba v zahradě"
              width={500}
              height={400}
              style={{
                objectFit: 'cover',
                borderRadius: '20px'
              }}
            />
          </div>
        </div>
      </section>

      {showOrderForm && <OrderForm onClose={() => setShowOrderForm(false)} />}
    </>
  );
} 