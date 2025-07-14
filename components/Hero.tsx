"use client"
import Link from "next/link"
import { useEffect, useState } from "react"
import OrderForm from "./OrderForm"
import PriceDiscount from "./PriceDiscount"

export default function Hero() {
  const [showOrderForm, setShowOrderForm] = useState(false)
  // Urgency countdown
  const [timeLeft, setTimeLeft] = useState({days: 0, hours: 0, minutes: 0, seconds: 0})
  useEffect(() => {
    // Akce končí za 7 dní od teď
    const deadline = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    const timer = setInterval(() => {
      const now = new Date()
      const diff = deadline.getTime() - now.getTime()
      if (diff <= 0) {
        setTimeLeft({days: 0, hours: 0, minutes: 0, seconds: 0})
        clearInterval(timer)
      } else {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        })
      }
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <>
      {/* Urgency Banner */}
      <div className="fixed top-0 left-0 w-full z-50 bg-yellow-400 text-black text-center py-2 font-bold shadow-md animate-pulse" style={{letterSpacing: '1px'}}>
        <span>Akční nabídka! Objednejte za 749 Kč – akce končí za: </span>
        <span className="inline-block font-mono">
          {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
        </span>
      </div>
      <section className="hero" id="domu">
        <div className="hero-content">
          <h1 className="hero-title">AMERICKÁ VRBA PLETENÁ</h1>
          <div className="inline-block bg-green-100 text-green-800 font-semibold rounded-full px-4 py-1 mb-2 shadow-sm text-sm animate-fade-in">
            Garance vrácení peněz do 30 dnů!
          </div>
          <p className="hero-paragraph">Jedinečné přírodní umění pro vaši zahradu - živé sochy, které rostou s vámi</p>
          <div className="hero-buttons">
            <button
              onClick={() => setShowOrderForm(true)}
              className="hero-button-order"
            >
              Chci vrbu za 749 Kč!
            </button>
             <div className="more-info-button-container relative">
                <Link href="#kontakt" className="hero-button-more">
                  Dozvědět se více
                </Link>
                <span className="pricing-visacka">
                   SEZÓNA 2025 JE JIŽ V PLNÉM PROUDU!
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