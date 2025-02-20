/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true
  },
  // Odstranění Vercel branding
  poweredByHeader: false,
  // Přidáme konfiguraci pro odstranění Vercel badgů
  experimental: {
    disableOptimizedLoading: true,
  }
}

module.exports = nextConfig 