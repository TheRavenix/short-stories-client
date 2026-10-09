'use client'

import styles from './EditName.module.css'
import { useState } from 'react'

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
import { EditNameContent } from './EditNameContent'

export function EditNameDrawer() {
  const [open, setOpen] = useState(false)

  return (
    <Drawer open={open} onOpenChange={setOpen} autoFocus>
      <DrawerTrigger asChild>
        <Button size='sm' variant='inverse'>
          Edit
        </Button>
      </DrawerTrigger>
      <DrawerPortal>
        <DrawerOverlay />
        <DrawerContent className={styles.drawerContent}>
          <DrawerHeader>
            <DrawerTitle>Edit Your Name</DrawerTitle>
          </DrawerHeader>
          <DrawerBody className={styles.drawerBody}>
            <EditNameContent setOpen={setOpen} />
          </DrawerBody>
        </DrawerContent>
      </DrawerPortal>
    </Drawer>
  )
}
