"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'

// Tento import bude fungovat pouze na straně serveru
// V produkci byste měli použít API route pro získání seznamu obrázků
import { getImagePaths } from "@/utils/imageLoader"

export default function Gallery() {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null)
  const [randomizedImages, setRandomizedImages] = useState<string[]>([])
  const [showAllImages, setShowAllImages] = useState(false)

  // Všechny dostupné obrázky
  const allImages = [
    '/galerie/vrba_americka_1.jpg',
    '/galerie/vrba_americka_2.jpg',
    '/galerie/vrba_americka_3.jpg',
    '/galerie/vrba_americka_4.jpg',
    '/galerie/vrba_americka_5.jpg',
    '/galerie/vrba_americka_6.jpg',
    '/galerie/vrba_americka_7.jpg',
    '/galerie/vrba_americka_8.jpg',
    '/galerie/vrba_americka_9.jpg',
    '/galerie/vrba_americka_10.jpg',
    '/galerie/vrba_americka_11.jpg',
    '/galerie/vrba_americka_12.jpg',
    '/galerie/vrba_americka_13.jpg',
    '/galerie/vrba_americka_14.jpg',
    '/galerie/vrba_americka_15.jpg',
    '/galerie/vrba_americka_16.jpg',
    '/galerie/vrba_americka_17.jpg',
    '/galerie/vrba_americka_18.jpg',
    '/galerie/vrba_americka_19.jpg',
    '/galerie/vrba_americka_20.jpg',
    '/galerie/vrba_americka_21.jpg',
    '/galerie/vrba_americka_22.jpg',
    '/galerie/vrba_americka_23.jpg',
    '/galerie/vrba_americka_24.jpg',
    '/galerie/vrba_americka_25.jpg',
    '/galerie/vrba_americka_design1.jpg',
    '/galerie/vrba_americka_design2.jpg',
    '/galerie/vrba_americka_design3.jpg',
    '/galerie/vrba_americka_design4.jpg',
    '/galerie/vrba_americka_design5.jpg',
    '/galerie/vrba_americka_design6.jpg',
    '/galerie/vrba_americka_design7.jpg',
    '/galerie/vrba_americka_design8.jpg',
    '/galerie/vrba_americka_design88.webp',
      ]

  // Funkce pro náhodné promíchání pole
  const shuffleArray = (array: string[]): string[] => {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      const temp = shuffled[i]
      shuffled[i] = shuffled[j]
      shuffled[j] = temp
    }
    return shuffled
  }

  useEffect(() => {
    // Vybere náhodných 7 obrázků při načtení komponenty
    setRandomizedImages(shuffleArray(allImages).slice(0, 7))
  }, [])

  const nextImage = () => {
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex + 1) % allImages.length)
    }
  }

  const prevImage = () => {
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex - 1 + allImages.length) % allImages.length)
    }
  }

  // Klávesové zkratky pro navigaci
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (activeImageIndex !== null) {
        if (e.key === 'ArrowRight') nextImage()
        if (e.key === 'ArrowLeft') prevImage()
        if (e.key === 'Escape') setActiveImageIndex(null)
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [activeImageIndex])

  return (
    <section className="gallery-section" id="galerie">
      <h2 className="section-title">GALERIE</h2>
      
      <div className="gallery-random-layout">
        <div className="side-images-left">
          {randomizedImages.slice(0, 3).map((src, index) => (
            <div key={`left-${index}`} className="small-image-container">
              <Image 
                src={src} 
                alt={`Vrba americká ${index + 1}`} 
                fill
                style={{ objectFit: 'cover' }}
                onClick={() => setActiveImageIndex(allImages.indexOf(src))}
              />
            </div>
          ))}
        </div>
        
        <div className="large-image-container">
          {randomizedImages[3] && (
            <Image 
              src={randomizedImages[3]} 
              alt="Vrba americká - hlavní" 
              fill
              style={{ objectFit: 'cover' }}
              onClick={() => setActiveImageIndex(allImages.indexOf(randomizedImages[3]))}
            />
          )}
        </div>
        
        <div className="side-images-right">
          {randomizedImages.slice(4, 7).map((src, index) => (
            <div key={`right-${index}`} className="small-image-container">
              <Image 
                src={src} 
                alt={`Vrba americká ${index + 5}`} 
                fill
                style={{ objectFit: 'cover' }}
                onClick={() => setActiveImageIndex(allImages.indexOf(src))}
              />
            </div>
          ))}
        </div>
      </div>

      <br></br>
      <br></br>

      <div className="gallery-button-container">

        <button 
          className="btn btn-primary gallery-button"
          onClick={() => setShowAllImages(true)}
        >
Prohlédnout si celou galerii        </button>
      </div>

      {/* Modal pro zobrazení velkých obrázků */}
      {activeImageIndex !== null && (
        <div className="gallery-modal active" onClick={() => setActiveImageIndex(null)}>
          <button className="gallery-modal-close" onClick={() => setActiveImageIndex(null)}>×</button>
          <button className="gallery-modal-prev" onClick={(e) => { e.stopPropagation(); prevImage(); }}>‹</button>
          <button className="gallery-modal-next" onClick={(e) => { e.stopPropagation(); nextImage(); }}>›</button>
          <div className="gallery-modal-content" onClick={e => e.stopPropagation()}>
            <Image 
              src={allImages[activeImageIndex]} 
              alt={`Vrba americká ${activeImageIndex + 1}`} 
              width={800} 
              height={600} 
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
      )}

      {/* Nový modal pro všechny miniatury */}
      {showAllImages && (
        <div className="gallery-modal gallery-grid-modal active" onClick={() => setShowAllImages(false)}>
          <button 
            className="gallery-modal-close" 
            onClick={() => setShowAllImages(false)}
          >
            ×
          </button>
          <div className="gallery-grid-container" onClick={e => e.stopPropagation()}>
            {allImages.map((src, index) => (
              <div 
                key={index} 
                className="gallery-grid-item"
                onClick={() => {
                  setShowAllImages(false);
                  setActiveImageIndex(index);
                }}
              >
                <Image
                  src={src}
                  alt={`Vrba americká ${index + 1}`}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}

