'use client'

import { AdminGuardOptions, useAdminGuard } from '@/hooks/auth'

type Props = AdminGuardOptions

export function AdminPageGuard(props: Props) {
  useAdminGuard(props)
  return null
}
