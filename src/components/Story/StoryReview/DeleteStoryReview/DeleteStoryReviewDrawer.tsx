'use client'

import { useState } from 'react'
import { TrashIcon } from 'lucide-react'

import styles from './DeleteStoryReview.module.css'

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
import { DeleteStoryReviewContent } from './DeleteStoryReviewContent'

type Props = {
  reviewId: number
}

export function DeleteStoryReviewDrawer({ reviewId }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <Drawer open={open} onOpenChange={setOpen} autoFocus>
      <DrawerTrigger asChild>
        <Button variant='destructive' size='icon'>
          <TrashIcon size={20} />
        </Button>
      </DrawerTrigger>
      <DrawerPortal>
        <DrawerOverlay />
        <DrawerContent className={styles.drawerContent}>
          <DrawerHeader>
            <DrawerTitle>Delete Review</DrawerTitle>
          </DrawerHeader>
          <DrawerBody className={styles.drawerBody}>
            <DeleteStoryReviewContent setOpen={setOpen} reviewId={reviewId} />
          </DrawerBody>
        </DrawerContent>
      </DrawerPortal>
    </Drawer>
  )
}
