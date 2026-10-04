"use client";

import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import styles from "./NavbarDrawer.module.css";

import { Button } from "@/components/ui/Button";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  DrawerPortal,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/Drawer";
import { NavbarDrawerAuthLinks } from "./NavbarDrawerAuthLinks";
import { navBarLinks } from "@/data/links";

export function NavbarDrawer() {
  const pathName = usePathname()
  const [open, setOpen] = useState(false)
  // const isAuthenticated = useAuthStore((s) => s.isAuthenticated)
  // const { profile } = useProfile()

  const toggleOpen = () => {
    setOpen((prev) => !prev)
  }

  return (
    <Drawer direction='left' open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <div className={styles.menuButtonContainer}>
          <Button variant='inverse' size='icon'>
            <MenuIcon size={20} />
          </Button>
        </div>
      </DrawerTrigger>
      <DrawerPortal>
        <DrawerOverlay />
        <DrawerContent className={styles.drawerContent}>
          <DrawerHeader>
            <DrawerTitle>Short stories</DrawerTitle>
          </DrawerHeader>
          <DrawerBody className={styles.drawerBody}>
            <div className={styles.drawerLinks}>
              {/* {isAuthenticated && profile?.role === 'admin' && (
                <Link href='/dashboard' onClick={toggleOpen}>
                  <Button variant='ghost' className={styles.drawerButton}>
                    <span
                      className={
                        pathName === '/dashboard'
                          ? styles.drawerActiveLinkText
                          : ''
                      }
                    >
                      Dashboard
                    </span>
                  </Button>
                </Link>
              )} */}
              {navBarLinks.map((link, i) => (
                <Link key={i} href={link.href} onClick={toggleOpen}>
                  <Button variant='ghost' className={styles.drawerButton}>
                    <span
                      className={
                        pathName === link.href
                          ? styles.drawerActiveLinkText
                          : ''
                      }
                    >
                      {link.name}
                    </span>
                  </Button>
                </Link>
              ))}
              <NavbarDrawerAuthLinks toggleOpen={toggleOpen} />
            </div>
          </DrawerBody>
        </DrawerContent>
      </DrawerPortal>
    </Drawer>
  )
}
