'use client'

import styles from './Navbar.module.css'

import { ThemeSelect } from '../theme/ThemeSelect'
import { ThemeToggle } from '../theme/ThemeToggle'
import { useAuthStore } from '@/stores/auth'

export function NavbarTheme() {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated)

  return isAuthenticated ? (
    <div className={styles.themeSelectContainer}>
      <ThemeSelect />
    </div>
  ) : (
    <ThemeToggle />
  )
}
