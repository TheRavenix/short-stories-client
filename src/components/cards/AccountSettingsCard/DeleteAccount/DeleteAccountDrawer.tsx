'use client'

import { useState } from 'react'

import styles from './DeleteAccount.module.css'

import { Button } from '@/components/ui/Button'
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerOverlay,
  DrawerPortal,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/Drawer'
import { DeleteAccountContent } from './DeleteAccountContent'

export function DeleteAccountDrawer() {
  const [open, setOpen] = useState(false)

  return (
    <Drawer open={open} onOpenChange={setOpen} autoFocus>
      <DrawerTrigger asChild>
        <Button size='sm' variant='destructive'>
          Delete
        </Button>
      </DrawerTrigger>
      <DrawerPortal>
        <DrawerOverlay />
        <DrawerContent className={styles.drawerContent}>
          <DrawerHeader>
            <DrawerTitle>Delete Your Account</DrawerTitle>
            <DrawerDescription>
              This action will delete your account permanently, and cannot be
              undone.
            </DrawerDescription>
          </DrawerHeader>
          <DrawerBody className={styles.drawerBody}>
            <DeleteAccountContent setOpen={setOpen} />
          </DrawerBody>
        </DrawerContent>
      </DrawerPortal>
    </Drawer>
  )
}
