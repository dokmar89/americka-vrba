"use client"

import Link from "next/link"
import { useState } from "react"
import OrderForm from "./OrderForm"

import { FaCalendarAlt } from "react-icons/fa"

export default function Hero() {
  const [showOrderForm, setShowOrderForm] = useState(false)
  
  return (
    <>
      <section className="hero" id="domu">
        <div className="hero-content">
          <h1 className="hero-title">AMERICKÁ VRBA PLETENÁ</h1>
          <div className="relative inline-block bg-gradient-to-r from-green-200 to-green-300 text-green-900 font-bold rounded-full px-6 py-3 mb-6 shadow-lg text-lg animate-fade-in-down">
            <div className="flex items-center">
              <FaCalendarAlt className="mr-3 text-2xl" />
              <span>Předobjednávky na sezónu 2026 zahájeny!</span>
            </div>
            <div className="text-sm font-normal text-center mt-1">První kusy odesíláme v březnu 2026.</div>
          </div>
          <p className="hero-paragraph">Jedinečné přírodní umění pro vaši zahradu - živé sochy, které rostou s vámi</p>
          <div className="hero-buttons">
            <button
              onClick={() => setShowOrderForm(true)}
              className="hero-button-order transform hover:scale-105 transition-transform duration-300"
            >
              Předobjednat za 749 Kč
            </button>
             <div className="more-info-button-container relative">
                <Link href="#kontakt" className="hero-button-more">
                  Dozvědět se více
                </Link>
              </div>
          </div>
        </div>
      </section>

      {showOrderForm && <OrderForm onClose={() => setShowOrderForm(false)} />}
    </>
  )
}