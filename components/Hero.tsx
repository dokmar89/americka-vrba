"use client"
import Link from "next/link"
import { useState } from "react"
import OrderForm from "./OrderForm"
import PriceDiscount from "./PriceDiscount"

export default function Hero() {
  const [showOrderForm, setShowOrderForm] = useState(false)

  return (
    <>
      <section className="hero" id="domu">
        <div className="hero-content">
          <h1 className="hero-title">AMERICKÁ VRBA PLETENÁ</h1>
          <p className="hero-paragraph">Jedinečné přírodní umění pro vaši zahradu - živé sochy, které rostou s vámi</p>
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
                  <div className="mt-2">
                    <PriceDiscount isHero={true} />
                  </div>
                </span>
              </div>
          </div>
        </div>
      </section>

      {showOrderForm && <OrderForm onClose={() => setShowOrderForm(false)} />}
    </>
  )
}