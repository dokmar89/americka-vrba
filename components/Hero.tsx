"use client"
import Link from "next/link"
import { useState } from "react"
import OrderForm from "./OrderForm"

export default function Hero() {
  const [showOrderForm, setShowOrderForm] = useState(false)

  return (
    <>
      <section
        className="hero min-h-screen bg-[url('/galerie/vrba_americka_3.jpg')] bg-cover bg-center bg-fixed flex items-center text-center text-white p-8 mt-0 backdrop-blur-[40px]"
        id="domu"
      >
        <div className="hero-content max-w-[1200px] mx-auto relative">
          <h1 className="font-['Ambery_Garden'] text-7xl font-bold mb-6 leading-tight">AMERICKÁ VRBA PLETENÁ</h1>
          <p className="text-xl mb-8 opacity-90">Nabízíme jedinečné přírodní umění pro vaši zahradu</p>
          <div className="hero-buttons flex gap-4 justify-center">
            <button
              onClick={() => setShowOrderForm(true)}
              className="btn btn-primary bg-[#32A250] text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:bg-[#2b8d45] hover:transform hover:-translate-y-1 hover:shadow-lg"
            >
              Objednávejte zde!
            </button>
            <div className="more-info-button-container relative">
              <Link
                href="#kontakt"
                className="btn btn-secondary bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:bg-white/10 hover:transform hover:-translate-y-1 hover:shadow-lg"
              >
                Dozvědět se více
              </Link>
              <span className="pricing-visacka absolute top-full left-1/2 transform -translate-x-1/2 -rotate-10 bg-[#2b8d45] text-white px-4 py-2 text-sm font-bold text-center shadow-md z-10 mt-2 whitespace-nowrap rounded transition-transform duration-400 hover:rotate-[-5deg] hover:scale-105">
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

