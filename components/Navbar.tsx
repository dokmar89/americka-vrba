"use client"

import Link from "next/link"
import { useState } from "react"
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#C2D6B4]/80 backdrop-blur-sm z-40">
      <div className="navbar fixed top-5 left-1/2 transform -translate-x-1/2 w-[calc(100%-20px)] max-w-[1200px] bg-white/60 backdrop-blur-sm rounded-3xl shadow-lg px-4 sm:px-8 py-3 sm:py-4 transition-all duration-300">
        <div className="nav-container flex justify-between items-center">
          <Link
            href="/"
            className="nav-logo font-['Ambery_Garden'] text-xl sm:text-2xl font-medium text-[rgb(29,78,37)] no-underline transition-transform duration-300 hover:scale-105"
          >
            AMERICKAVRBA.CZ
          </Link>

          <div className="md:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="text-2xl text-[rgb(35,54,17)] hover:text-[#151b15]"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          <ul
            className={`nav-links font-['Ambery_Garden'] list-none md:flex gap-4 lg:gap-8 ${isMenuOpen ? 'flex flex-col absolute top-full left-0 w-full bg-white/90 py-4 shadow-lg rounded-b-xl mt-1' : 'hidden'
              }`}
          >
            <li>
              <Link
                href="#domu"
                className="block px-4 py-2 text-[rgb(35,54,17)] no-underline font-normal hover:text-[#151b15] transition-colors duration-300"
              >
                OBJEDNÁVKA
              </Link>
            </li>
            <li>
              <Link
                href="#o-nas"
                className="block px-4 py-2 text-[rgb(35,54,17)] no-underline font-normal hover:text-[#151b15] transition-colors duration-300"
              >
                O NÁS
              </Link>
            </li>
            <li>
              <Link
                href="#vyhody"
                className="block px-4 py-2 text-[rgb(35,54,17)] no-underline font-normal hover:text-[#151b15] transition-colors duration-300"
              >
                VÝHODY
              </Link>
            </li>
            <li>
              <Link
                href="#pece"
                className="block px-4 py-2 text-[rgb(35,54,17)] no-underline font-normal hover:text-[#151b15] transition-colors duration-300"
              >
                NÁVOD
              </Link>
            </li>
            <li>
              <Link
                href="#galerie"
                className="block px-4 py-2 text-[rgb(35,54,17)] no-underline font-normal hover:text-[#151b15] transition-colors duration-300"
              >
                GALERIE
              </Link>
            </li>
            <li>
              <Link
                href="#kontakt"
                className="block px-4 py-2 text-[rgb(35,54,17)] no-underline font-normal hover:text-[#151b15] transition-colors duration-300"
              >
                KONTAKT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}