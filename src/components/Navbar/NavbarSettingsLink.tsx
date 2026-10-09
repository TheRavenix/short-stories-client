'use client'

import { LinkProps } from 'next/link'
import { ComponentProps } from 'react'
import { usePathname } from 'next/navigation'

import { NavbarLink } from './NavbarLink'
import { useAuthStore } from '@/stores/auth'

type Props = Omit<LinkProps, 'href'> &
  Omit<ComponentProps<'a'>, 'children'>

export function NavbarSettingsLink({ className, ...rest }: Props) {
  const pathName = usePathname()
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated)

  if (!isAuthenticated) {
    return null
  }

  return (
    <NavbarLink
      className={className}
      href='/settings'
      data-active={pathName === '/settings'}
      {...rest}
    >
      Settings
    </NavbarLink>
  )
}
