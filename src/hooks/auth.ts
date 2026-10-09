import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

import { useProfileStatus } from './profile'

export type AdminGuardOptions = {
  redirectTo?: string
  onError?: () => void
}

export function useAdminGuard(options?: AdminGuardOptions) {
  const router = useRouter()
  const profileStatus = useProfileStatus()

  useEffect(() => {
    if (
      profileStatus.isError ||
      (profileStatus.isSuccess && profileStatus.status?.role !== 'admin')
    ) {
      options?.onError?.() || router.replace(options?.redirectTo || '/');
    }
  }, [profileStatus.status, profileStatus.isError, profileStatus.isSuccess]
  )

  return profileStatus
}

type AuthSessionOptions = {
  redirectTo?: string
  onError?: () => void
}

export function useAuthSession(options?: AuthSessionOptions) {
  const router = useRouter()
  const profileStatus = useProfileStatus()

  useEffect(() => {
    if (profileStatus.isError) {
      options?.onError?.() || router.replace(options?.redirectTo || '/sign-in')
    }
  }, [profileStatus.isError])

  return profileStatus
}

type RedirectIfAuthenticatedOptions = {
  redirectTo?: string
  onSuccess?: () => void
}

export function useRedirectIfAuthenticated(options?: RedirectIfAuthenticatedOptions) {
  const router = useRouter()
  const profileStatus = useProfileStatus()

  useEffect(() => {
    if (profileStatus.isSuccess) {
      options?.onSuccess?.() || router.replace(options?.redirectTo || '/')
    }
  }, [profileStatus.isSuccess])

  return profileStatus
}
