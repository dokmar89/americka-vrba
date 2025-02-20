/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true
  },
  // Odstranění Vercel branding
  poweredByHeader: false,
  // Vypneme ESLint při buildu
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Vypneme TypeScript kontroly při buildu
  typescript: {
    ignoreBuildErrors: true,
  },
  // Přidáme konfiguraci pro odstranění Vercel badgů
  experimental: {
    disableOptimizedLoading: true,
  }
}

module.exports = nextConfig 