'use client'

import { XIcon } from 'lucide-react'
import { useState } from 'react'

import styles from './CreateStoryReview.module.css'

import { Button } from '../../../ui/Button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '../../../ui/Dialog'
import { CreateStoryReviewContent } from './CreateStoryReviewContent'

type Props = {
  storyId: number
}

export function CreateStoryReviewDialog({ storyId }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div className={styles.triggerWrapper}>
        <DialogTrigger asChild>
          <Button>Add a Review</Button>
        </DialogTrigger>
      </div>
      <DialogContent>
        <DialogTitle>Add a Review</DialogTitle>
        <CreateStoryReviewContent storyId={storyId} setOpen={setOpen} />
        <DialogClose asChild>
          <XIcon size={20} />
        </DialogClose>
      </DialogContent>
    </Dialog>
  )
}
