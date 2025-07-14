"use client"

import { useState, useEffect, useRef } from "react"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Benefits from "@/components/Benefits"
import CTA from "@/components/CTA"
import Care from "@/components/Care"
import Gallery from "@/components/Gallery"
import FAQ from "@/components/FAQ"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import Popup from "@/components/Popup"
import OrderForm from "@/components/OrderForm"
import Specs from '@/components/Specs'
import PriceDiscount from '@/components/PriceDiscount'

export default function Home() {
  const [showPopup, setShowPopup] = useState(true)
  const [showOrderForm, setShowOrderForm] = useState(false)
  const [showExitPopup, setShowExitPopup] = useState(false)
  const exitPopupShown = useRef(false)
  const handleOrderClick = () => setShowOrderForm(true)

  // Exit-intent detection (desktop)
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 40 && !showOrderForm && !showPopup && !exitPopupShown.current) {
        setShowExitPopup(true)
        exitPopupShown.current = true
      }
    }
    document.addEventListener('mouseleave', handleMouseLeave)
    return () => document.removeEventListener('mouseleave', handleMouseLeave)
  }, [showOrderForm, showPopup])

  return (
    <main>
      <Navbar />
      <Hero />
      
      <br></br>
      <br></br>
      <About />
      
      <br></br>
      <br></br>
      <br></br>
      <CTA />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Benefits />
      <br></br>
      
      <br></br>
      <br></br>
      <Care />
      <br></br>
      <br></br>
      <Gallery />
      <br></br>
      <br></br>
      <FAQ />
        
      <Specs />

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Contact />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Footer />
      {showPopup && (
        <Popup
          onClose={() => setShowPopup(false)}
          onOrder={() => {
            setShowPopup(false)
            setShowOrderForm(true)
          }}
        />
      )}
      {showOrderForm && <OrderForm onClose={() => setShowOrderForm(false)} />}
      {/* Sticky CTA button */}
      {!showOrderForm && (
        <div className="fixed bottom-6 right-6 z-50 animate-pulse">
          <button
            onClick={handleOrderClick}
            className="bg-green-600 text-white px-6 py-4 rounded-full shadow-lg text-lg font-bold hover:bg-green-700 transition"
            style={{ boxShadow: '0 4px 24px 0 rgba(34,197,94,0.3)' }}
          >
            Chci vrbu za 749 Kč!
          </button>
        </div>
      )}
      {/* Exit-intent popup */}
      {showExitPopup && !showOrderForm && !showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-lg w-full relative">
            <button onClick={() => setShowExitPopup(false)} className="absolute top-4 right-4 text-2xl hover:text-gray-500">&times;</button>
            <h2 className="text-3xl font-bold mb-4 text-green-700 text-center">Neodcházejte s prázdnou!</h2>
            <p className="text-lg text-center mb-4">Jako poděkování za návštěvu vám nabízíme <span className="font-bold text-green-600">extra bonus</span> k objednávce:</p>
            <ul className="mb-4 text-center text-green-700 font-semibold">
              <li>🌱 Malý dárek k objednávce zdarma</li>
              <li>📦 Prioritní vyřízení objednávky</li>
            </ul>
            <button
              onClick={() => {
                setShowExitPopup(false)
                setShowOrderForm(true)
              }}
              className="w-full bg-green-600 text-white py-3 rounded-lg text-xl font-bold hover:bg-green-700 transition"
            >
              Chci využít bonus a objednat
            </button>
            <p className="text-xs text-gray-500 text-center mt-4">Akce platí pouze při této návštěvě.</p>
          </div>
        </div>
      )}
    </main>
  )
}

