"use client"

import { useState } from "react"
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

export default function Home() {
  const [showPopup, setShowPopup] = useState(true)
  const [showOrderForm, setShowOrderForm] = useState(false)

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
    </main>
  )
}

