"use client"
import Link from "next/link"
import { useState } from "react"
import OrderForm from "./OrderForm"

export default function Hero() {
  const [showOrderForm, setShowOrderForm] = useState(false)

  return (
    <>
      <section className="hero" id="domu">
        <div className="hero-content">
          <h1 className="hero-title">AMERICKÁ VRBA PLETENÁ</h1>
          <p className="hero-paragraph">Nabízíme jedinečné přírodní umění pro vaši zahradu</p>
          <div className="hero-buttons">
            <button
              onClick={() => setShowOrderForm(true)}
              className="hero-button-order"
            >
              Objednávejte zde!
            </button>
             <div className="more-info-button-container relative">
                <Link href="#kontakt" className="hero-button-more">
                  Dozvědět se více
                </Link>
                <span className="pricing-visacka">
                  PŘIJÍMÁME OBJEDNÁVKY NA SEZÓNU 2025!
                  <br />
                  <strong>890 Kč / ks</strong>
                </span>
              </div>
          </div>
        </div>
      </section>

      {showOrderForm && <OrderForm onClose={() => setShowOrderForm(false)} />}
    </>
  )
}