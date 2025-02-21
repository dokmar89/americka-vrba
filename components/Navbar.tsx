"use client"

import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#C2D6B4]/80 backdrop-blur-sm z-40">
      <div className="navbar fixed top-5 left-1/2 transform -translate-x-1/2 w-[calc(100%-40px)] max-w-[1200px] bg-white/60 backdrop-blur-sm rounded-3xl shadow-lg z-50 px-8 py-4 transition-all duration-300">
        <div className="nav-container flex justify-between items-center">
          <Link
            href="/"
            className="nav-logo font-['Ambery_Garden'] text-2xl font-medium text-[rgb(29,78,37)] no-underline transition-transform duration-300 hover:scale-105"
          >
            AMERICKAVRBA.CZ
          </Link>
          <ul
            className={`nav-links font-['Ambery_Garden'] flex gap-8 list-none ${isMenuOpen ? "flex-col items-center" : "hidden md:flex"}`}
          >
            <li>
              <Link
                href="#domu"
                className="text-[rgb(35,54,17)] no-underline font-normal hover:text-[#151b15] transition-colors duration-300"
              >
                OBJEDNÁVKA
              </Link>
            </li>
            <li>
              <Link
                href="#o-nas"
                className="text-[rgb(35,54,17)] no-underline font-normal hover:text-[#151b15] transition-colors duration-300"
              >
                O NÁS
              </Link>
            </li>
            <li>
              <Link
                href="#vyhody"
                className="text-[rgb(35,54,17)] no-underline font-normal hover:text-[#151b15] transition-colors duration-300"
              >
                VÝHODY
              </Link>
            </li>
            <li>
              <Link
                href="#pece"
                className="text-[rgb(35,54,17)] no-underline font-normal hover:text-[#151b15] transition-colors duration-300"
              >
                NÁVOD
              </Link>
            </li>
            <li>
              <Link
                href="#galerie"
                className="text-[rgb(35,54,17)] no-underline font-normal hover:text-[#151b15] transition-colors duration-300"
              >
                GALERIE
              </Link>
            </li>
            <li>
              <Link
                href="#kontakt"
                className="text-[rgb(35,54,17)] no-underline font-normal hover:text-[#151b15] transition-colors duration-300"
              >
                KONTAKT
              </Link>
            </li>
          </ul>
          <div className="nav-toggle md:hidden text-2xl cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            ☰
          </div>
        </div>
      </div>
    </nav>
  )
}

