"use client"

import type React from "react"

import { useState, useEffect } from "react"

const CENA_ZA_KUS = 749
const CENA_DOPRAVY = 299
const CENA_DOBIRKY = 45
const PROMO_KODY = {
  'VRBA10': 0.1 // 10% sleva
}

export default function OrderForm({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState({
    jmeno: "",
    email: "",
    telefon: "",
    ulice: "",
    mesto: "",
    psc: "",
    pocetKusu: "1",
    doprava: "",
    platba: "",
    promoKod: ""
  })

  const [celkovaCena, setCelkovaCena] = useState(0)
  const [sleva, setSleva] = useState(0)
  const [promoKodAktivni, setPromoKodAktivni] = useState(false)
  const [showBankDetails, setShowBankDetails] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    const pocetKusu = Number.parseInt(formData.pocetKusu)
    const cenaProduktu = pocetKusu * CENA_ZA_KUS
    
    // Výpočet slevy
    const aktualniSleva = promoKodAktivni ? cenaProduktu * PROMO_KODY['VRBA10'] : 0
    setSleva(aktualniSleva)

    let cenaDopravy = 0
    if (formData.doprava === "prepravni") {
      if (pocetKusu <= 2) cenaDopravy = CENA_DOPRAVY
      else if (pocetKusu <= 4) cenaDopravy = 2 * CENA_DOPRAVY
      else cenaDopravy = 3 * CENA_DOPRAVY
    }

    let cenaDobirky = 0
    if (formData.platba === "dobirka") {
      if (pocetKusu <= 2) cenaDobirky = CENA_DOBIRKY
      else if (pocetKusu <= 4) cenaDobirky = 2 * CENA_DOBIRKY
      else cenaDobirky = 3 * CENA_DOBIRKY
    }

    setCelkovaCena(cenaProduktu - aktualniSleva + cenaDopravy + cenaDobirky)
    setShowBankDetails(formData.platba === "prevod")
  }, [formData, promoKodAktivni])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handlePromoKod = () => {
    if (formData.promoKod.toUpperCase() === 'VRBA10') {
      setPromoKodAktivni(true)
    } else {
      alert('Neplatný promo kód')
      setPromoKodAktivni(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/submit-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          celkovaCena,
          sleva,
          promoKod: promoKodAktivni ? formData.promoKod : '',
        }),
      })

      if (response.ok) {
        alert("Objednávka byla úspěšně odeslána!")
        onClose()
      } else {
        throw new Error("Chyba při odesílání objednávky")
      }
    } catch (error) {
      console.error("Chyba při odesílání objednávky:", error)
      alert("Nastala chyba při odesílání objednávky. Prosím, zkuste to znovu později.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-lg p-8 max-w-2xl w-full my-8 relative max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Objednávka - Vrba americká</h2>
          <button onClick={onClose} className="text-2xl">
            &times;
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Info boxy doprava/platba */}
          <div className="flex flex-col md:flex-row gap-4 mb-2">
            <div className="flex-1 bg-blue-50 border border-blue-300 rounded-lg p-3 flex items-center gap-3">
              <span className="text-blue-600 text-2xl">🚚</span>
              <span>Doprava po celé ČR za 299 Kč (max. 2 ks v jedné zásilce). Osobní odběr zdarma.</span>
            </div>
            <div className="flex-1 bg-yellow-50 border border-yellow-300 rounded-lg p-3 flex items-center gap-3">
              <span className="text-yellow-600 text-2xl">💳</span>
              <span>Platba převodem zdarma, dobírka za 45 Kč.</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="jmeno" className="block mb-2">
                Jméno a příjmení*
              </label>
              <input
                type="text"
                id="jmeno"
                name="jmeno"
                required
                className="w-full p-2 border rounded"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">
                Email*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-2 border rounded"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="telefon" className="block mb-2">
                Telefon*
              </label>
              <input
                type="tel"
                id="telefon"
                name="telefon"
                required
                className="w-full p-2 border rounded"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="ulice" className="block mb-2">
                Ulice a č.popisné*
              </label>
              <input
                type="text"
                id="ulice"
                name="ulice"
                required
                className="w-full p-2 border rounded"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="mesto" className="block mb-2">
                Město*
              </label>
              <input
                type="text"
                id="mesto"
                name="mesto"
                required
                className="w-full p-2 border rounded"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="psc" className="block mb-2">
                PSČ*
              </label>
              <input
                type="text"
                id="psc"
                name="psc"
                required
                className="w-full p-2 border rounded"
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <label htmlFor="pocetKusu" className="block mb-2">
              Počet kusů*
            </label>
            <select
              id="pocetKusu"
              name="pocetKusu"
              required
              className="w-full p-2 border rounded"
              onChange={handleChange}
            >
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <option key={num} value={num}>
                  {num} ks
                </option>
              ))}
            </select>
          </div>
          <div>
            <p className="mb-2">Způsob dopravy*</p>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="radio" name="doprava" value="osobni" required onChange={handleChange} />
                <span className="ml-2">Osobní převzetí v sídle firmy (0 Kč)</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="doprava" value="prepravni" required onChange={handleChange} />
                <span className="ml-2">
                Přepravní společnost na adresu (299 Kč / max 2ks = 1 doprava)

                </span>
              </label>
            </div>
          </div>
          <div>
            <p className="mb-2">Způsob platby*</p>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="radio" name="platba" value="prevod" required onChange={handleChange} />
                <span className="ml-2">Bankovním převodem (0 Kč)</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="platba" value="dobirka" required onChange={handleChange} />
                <span className="ml-2">Dobírka (45 Kč /max 2ks = 1 dobírka)
                </span>
              </label>
            </div>
          </div>
          <div className="mb-6">
            <label className="block mb-2">Promo kód (nepovinné)</label>
            <div className="flex gap-2">
              <input
                type="text"
                name="promoKod"
                className="flex-1 p-2 border rounded"
                value={formData.promoKod}
                onChange={handleChange}
                placeholder="Zadejte promo kód"
              />
              <button
                type="button"
                onClick={handlePromoKod}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
              >
                Ověřit kód
              </button>
            </div>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Souhrn objednávky</h3>
            <div className="space-y-2">
              <p>
                Cena za zboží: <strong>{Number.parseInt(formData.pocetKusu) * CENA_ZA_KUS} Kč</strong>
              </p>
              {sleva > 0 && (
                <p className="text-green-600">
                  Sleva (VRBA10): <strong>-{sleva} Kč</strong>
                </p>
              )}
              {formData.doprava === "prepravni" && (
                <p>Doprava: <strong>{
                  Number.parseInt(formData.pocetKusu) <= 2 ? CENA_DOPRAVY :
                  Number.parseInt(formData.pocetKusu) <= 4 ? 2 * CENA_DOPRAVY :
                  3 * CENA_DOPRAVY
                } Kč</strong></p>
              )}
              {formData.platba === "dobirka" && (
                <p>Dobírka: <strong>{
                  Number.parseInt(formData.pocetKusu) <= 2 ? CENA_DOBIRKY :
                  Number.parseInt(formData.pocetKusu) <= 4 ? 2 * CENA_DOBIRKY :
                  3 * CENA_DOBIRKY
                } Kč</strong></p>
              )}
              <p className="text-lg font-bold border-t pt-2 mt-2">
                Celková cena: {celkovaCena} Kč
              </p>
            </div>
          </div>
          {/* Money-back guarantee box */}
          <div className="bg-green-50 border border-green-400 text-green-900 rounded-lg p-4 mt-4 text-center shadow-sm">
            <strong>Garance vrácení peněz!</strong><br />
            Nakupujete bez rizika – pokud nebudete spokojeni, vrátíme vám peníze do 30 dnů od doručení. Vaše spokojenost je pro nás na prvním místě.
          </div>
          {showBankDetails && (
            <div className="bg-yellow-100 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Informace k platbě</h3>
              <p>
                Číslo účtu: <strong>219161239/0300 (ČSOB)</strong>
              </p>
              <p>
                Částka k úhradě: <strong>{celkovaCena} Kč</strong>
              </p>
              <p className="text-sm italic mt-2">
                Pro správné přiřazení platby uveďte do poznámky pro příjemce vaše jméno a příjmení.
              </p>
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Odesílání..." : "Odeslat objednávku"}
          </button>
        </form>
      </div>
    </div>
  )
}

