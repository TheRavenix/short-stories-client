'use client'

import { TrashIcon, XIcon } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/Button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/Dialog'
import { DeleteStoryReviewContent } from './DeleteStoryReviewContent'

type Props = {
  reviewId: number
}

export function DeleteStoryReviewDialog({ reviewId }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant='destructive' size='icon'>
          <TrashIcon size={20} />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Delete Review</DialogTitle>
        <DeleteStoryReviewContent setOpen={setOpen} reviewId={reviewId} />
        <DialogClose asChild>
          <XIcon size={20} />
        </DialogClose>
      </DialogContent>
    </Dialog>
  )
}
