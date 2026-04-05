/** @type {import('next').NextConfig} */
const nextConfig = {
  // No 'output: export' — Vercel runs Next.js natively (SSR + static hybrid)
  // This enables Vercel's image optimization, edge functions, and ISR
  images: {
    // unoptimized: false is the default — Vercel's CDN handles this for free
  },
}

module.exports = nextConfig
