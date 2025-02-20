import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Odstraní Vercel badge
  const response = NextResponse.next()
  response.headers.delete('x-middleware-prefetch')
  response.headers.delete('x-vercel-sc-host')
  response.headers.set('x-powered-by', 'americkavrba.cz')
  return response
} 