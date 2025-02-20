"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function Popup({ onClose, onOrder }: { onClose: () => void; onOrder: () => void }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 5000)
    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-8 max-w-4xl w-full">
        <div className="flex justify-between items-stretch gap-8">
          {/* Levá strana */}
          <div className="flex-1">
            <Image 
              src="/product-Photoroom.png" 
              alt="Americká vrba" 
              width={400} 
              height={400} 
              className="rounded-lg h-full"
              style={{ objectFit: 'contain' }}
            />
          </div>

          {/* Pravá strana */}
          <div className="flex-1 flex flex-col">
            <div className="flex justify-between items-start">
              <h2 className="text-4xl font-bold mb-6">Americká vrba pletená</h2>
              <button onClick={onClose} className="text-3xl hover:text-gray-500">
                &times;
              </button>
            </div>

            <div className="bg-green-500 text-white px-8 py-4 rounded-full font-bold inline-block mb-8 text-center">
              <span className="text-3xl">890 Kč</span>
              <span className="block text-lg mt-1">včetně DPH 12%</span>
            </div>

            <ul className="space-y-4 mb-8 text-lg">
              <li className="flex items-center gap-2">
                <span className="text-green-500 text-xl">✓</span>
                <strong>Výška:</strong> 150-160 cm
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500 text-xl">✓</span>
                <strong>Doprava:</strong> 299 Kč / objednávka
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500 text-xl">✓</span>
                <strong>Výhodně:</strong> 2 ks = 1 doprava
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500 text-xl">✓</span>
                <strong>Dobírka:</strong> 45 Kč
              </li>
            </ul>

            <p className="text-gray-600 italic mb-8 text-lg">
              Nenechte si ujít tuto jedinečnou nabídku! Vrba Americká zkrášlí vaši zahradu a poskytne stín.
            </p>

            <button
              onClick={onOrder}
              className="w-full bg-green-500 text-white py-4 rounded-lg hover:bg-green-600 transition-colors text-xl font-semibold mt-auto"
            >
              Objednat Nyní
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

