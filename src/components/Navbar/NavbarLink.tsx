'use client'

import Link, { LinkProps } from 'next/link'
import { ComponentProps } from 'react'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'

import styles from './Navbar.module.css'

type Props = LinkProps & ComponentProps<'a'>

export function NavbarLink({ className, href, ...rest }: Props) {
  const pathName = usePathname()

  return (
    <Link
      className={clsx(styles.link, className)}
      href={href}
      data-active={pathName === href}
      {...rest}
    />
  )
}
