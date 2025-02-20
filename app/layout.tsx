import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter, DM_Sans, Outfit } from "next/font/google"

const inter = Inter({ 
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
})

// nebo použijeme DM Sans
const dmSans = DM_Sans({ 
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
})

// Outfit má lepší podporu pro českou diakritiku
const outfit = Outfit({ 
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Americká vrba pletená",
  description: "Nabízíme jedinečné přírodní umění pro vaši zahradu",
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs">
      <head>
        <title>Americká vrba</title>
      </head>
      <body className={dmSans.className}>
        <div className={outfit.className}>
          {children}
        </div>
      </body>
    </html>
  )
}

