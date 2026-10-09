'use client'

import { useRedirectIfAuthenticated } from '@/hooks/auth'

export function AuthPageGuard() {
  useRedirectIfAuthenticated()
  return null
}
