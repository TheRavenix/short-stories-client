"use client";

import Link from "next/link";

import styles from "./Navbar.module.scss";

import { Button } from "../ui/Button";
import { Skeleton } from "../Skeleton";
import { useAuthStore } from "@/stores/auth";
import { useProfile } from "@/hooks/profile";
import { authLinks } from "@/data/links";

export function NavbarAuthActions() {
  const { isLoading } = useProfile()
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated)

  if (isLoading) {
    return <Skeleton type='button' width='120px' />
  }
  if (isAuthenticated) {
    return null
  }

  return (
    <div className={styles.authActions}>
      {authLinks.map((link, i) => (
        <Link key={i} href={link.href}>
          <Button
            variant={link.href === '/sign-up' ? 'inverse' : 'primary'}
            size='sm'
          >
            {link.name}
          </Button>
        </Link>
      ))}
    </div>
  )
}
