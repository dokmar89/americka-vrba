import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Odstraní Vercel badge
  const response = NextResponse.next()
  response.headers.delete('x-middleware-prefetch')
  response.headers.delete('x-vercel-sc-host')
  response.headers.set('x-powered-by', 'americkavrba.cz')
  
  // Bezpečnostní headers
  response.headers.set('X-Frame-Options', 'SAMEORIGIN')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()')
  
  return response
} 