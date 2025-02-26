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
  title: "Americká vrba pletená | Přírodní umění pro vaši zahradu",
  description: "Nabízíme jedinečnou krásnou vrbu americkou, která tvoří elegantní vzor správně zapletenými čtyřmi pruty. Prostě rostou s vámi. Doručení po celé ČR.",
  keywords: "americká vrba,pletená vrba,zapletená ,zahradní dekorace, na terasu, přírodní umění, zahradní design, designový zázrak, jediní v ČR",
  authors: [{ name: "Americká Vrba Pletená", url: "https://americkavrba.cz" }],
  creator: "Americká Vrba",
  publisher: "Americká Vrba",
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  openGraph: {
    title: "Americká vrba pletená | Přírodní umění pro vaši zahradu",
    description: "Nabízíme jedinečnou krásnou vrbu americkou, která tvoří elegantní vzor správně zapletenými čtyřmi pruty. Prostě rostou s vámi. Doručení po celé ČR.",
    url: "https://americkavrba.cz",
    siteName: "Americká Vrba",
    locale: "cs_CZ",
    type: "website",
    images: [
      {
        url: "/galerie/vrba_americka_design8.jpg",
        width: 1200,
        height: 630,
        alt: "Americká vrba pletená",
      }
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://americkavrba.cz',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Americká vrba pletená | Přírodní umění pro vaši zahradu',
    description: 'Nabízíme jedinečnou krásnou vrbu americkou, která tvoří elegantní vzor správně zapletenými čtyřmi pruty. Prostě rostou s vámi. Doručení po celé ČR.',
    images: ['/galerie/vrba_americka_design8.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Americká Vrba",
              "description": "Nabízíme jedinečnou krásnou vrbu americkou, která tvoří elegantní vzor správně zapletenými čtyřmi pruty. Živé sochy, které rostou s vámi.",
              "url": "https://americkavrba.cz",
              "telephone": "+420602668085",
              "email": "info@americkavrba.cz",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "CZ",
                "addressLocality": "Pačlavice"
              },
              "priceRange": "$$",
              "openingHours": "Po-Ne 00:00-23:59",
              "image": "https://americkavrba.cz/galerie/vrba_americka_design8.jpg",
              "logo": "https://americkavrba.cz/horizontalni-logo.png",
              "offers": {
                "@type": "Offer",
                "price": "890",
                "priceCurrency": "CZK",
                "availability": "https://schema.org/InStock"
              },
              "sameAs": [
                "https://www.facebook.com/people/Americká-vrba-pletená-CZ/61565484336195/",
                "https://www.instagram.com/americkavrba"
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Americká Vrba",
              "url": "https://americkavrba.cz",
              "logo": "https://americkavrba.cz/horizontalni-logo.png",
              "image": "https://americkavrba.cz/galerie/vrba_americka_design8.jpg"
            })
          }}
        />
      </head>
      <body suppressHydrationWarning className={dmSans.className}>
        <div className={outfit.className}>
          {children}
        </div>
      </body>
    </html>
  )
}