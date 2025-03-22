"use client"

import { useState, useEffect } from 'react'

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Kontrola, zda již uživatel přijal cookies
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-700">
          Tento web používá cookies pro zlepšení vašeho uživatelského zážitku a pro nezbytné fungování webu. 
          Používáním našich stránek souhlasíte s použitím cookies v souladu s naším{' '}
          <a 
            href="/zasady-ochrany-osobnich-udaju" 
            className="text-green-600 hover:text-green-700 underline"
          >
            prohlášením o ochraně osobních údajů
          </a>.
        </div>
        <div className="flex gap-4">
          <button
            onClick={acceptCookies}
            className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors duration-300"
          >
            Přijmout
          </button>
        </div>
      </div>
    </div>
  )
} 