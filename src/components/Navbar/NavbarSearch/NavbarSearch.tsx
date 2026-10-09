'use client'

import { NavbarSearchDrawer } from './NavbarSearchDrawer'
import { NavbarSearchDialog } from './NavbarSearchDialog'
import { useIsMobile } from '@/hooks/media/use-media-utils'

export function NavbarSearch() {
  const isMobile = useIsMobile()
  return isMobile ? <NavbarSearchDrawer /> : <NavbarSearchDialog />
}
