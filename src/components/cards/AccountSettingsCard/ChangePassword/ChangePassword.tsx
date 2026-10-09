'use client'

import { ChangePasswordDialog } from './ChangePasswordDialog'
import { ChangePasswordDrawer } from './ChangePasswordDrawer'
import { useIsMobile } from '@/hooks/media/use-media-utils'

export function ChangePassword()  {
  const isMobile = useIsMobile()
  return isMobile ? <ChangePasswordDrawer /> : <ChangePasswordDialog />
}
