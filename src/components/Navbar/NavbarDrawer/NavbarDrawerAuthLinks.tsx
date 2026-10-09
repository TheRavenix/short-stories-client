import Link from 'next/link'

import styles from './NavbarDrawer.module.css'

import { Button } from '@/components/ui/Button'
import { authLinks } from '@/data/links'
import { useAuthStore } from '@/stores/auth'

type Props = {
  toggleOpen: () => void
}

export function NavbarDrawerAuthLinks({ toggleOpen }: Props) {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated)

  if (isAuthenticated) {
    return null
  }

  return (
    <div className={styles.drawerLinks}>
      {authLinks.map((link, i) => (
        <Link key={i} href={link.href} onClick={toggleOpen}>
          <Button
            variant={link.href === '/sign-up' ? 'inverse' : 'primary'}
            size='sm'
            className={styles.drawerButton}
          >
            {link.name}
          </Button>
        </Link>
      ))}
    </div>
  )
}
