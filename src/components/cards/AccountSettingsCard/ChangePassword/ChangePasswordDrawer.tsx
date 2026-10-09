'use client'

import { useState } from 'react'

import styles from './ChangePassword.module.css'

import { Button } from '@/components/ui/Button'
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  DrawerPortal,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/Drawer'
import { ChangePasswordContent } from './ChangePasswordContent'

export function ChangePasswordDrawer() {
  const [open, setOpen] = useState(false)

  return (
    <Drawer open={open} onOpenChange={setOpen} autoFocus>
      <DrawerTrigger asChild>
        <Button size='sm' variant='inverse'>
          Change
        </Button>
      </DrawerTrigger>
      <DrawerPortal>
        <DrawerOverlay />
        <DrawerContent className={styles.drawerContent}>
          <DrawerHeader>
            <DrawerTitle>Change Your Password</DrawerTitle>
          </DrawerHeader>
          <DrawerBody className={styles.drawerBody}>
            <ChangePasswordContent setOpen={setOpen} />
          </DrawerBody>
        </DrawerContent>
      </DrawerPortal>
    </Drawer>
  )
}
