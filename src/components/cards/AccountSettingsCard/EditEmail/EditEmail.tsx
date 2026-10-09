'use client'

import { EditEmailDialog } from './EditEmailDialog'
import { EditEmailDrawer } from './EditEmailDrawer'
import { useIsMobile } from '@/hooks/media/use-media-utils'

export function EditEmail() {
  const isMobile = useIsMobile()
  return isMobile ? <EditEmailDrawer /> : <EditEmailDialog />
}
