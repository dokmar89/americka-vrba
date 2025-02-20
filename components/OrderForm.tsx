"use client"

import type React from "react"

import { useState, useEffect } from "react"

const CENA_ZA_KUS = 890
const CENA_DOPRAVY = 299
const CENA_DOBIRKY = 45

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
  })

  const [celkovaCena, setCelkovaCena] = useState(0)
  const [showBankDetails, setShowBankDetails] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    const pocetKusu = Number.parseInt(formData.pocetKusu)
    const cenaProduktu = pocetKusu * CENA_ZA_KUS

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

    setCelkovaCena(cenaProduktu + cenaDopravy + cenaDobirky)
    setShowBankDetails(formData.platba === "prevod")
  }, [formData])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
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

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center overflow-y-auto">
      <div className="bg-white rounded-lg p-8 max-w-2xl w-full m-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Objednávka - Vrba americká</h2>
          <button onClick={onClose} className="text-2xl">
            &times;
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
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
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Souhrn objednávky</h3>
            <p>
              Celková cena: <strong>{celkovaCena} Kč</strong>
            </p>
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

