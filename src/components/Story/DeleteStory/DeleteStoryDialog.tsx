'use client'

import { XIcon } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/Button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/Dialog'
import { DeleteStoryContent } from './DeleteStoryContent'

type Props = {
  storyId: number
  storyName: string
}

export function DeleteStoryDialog({ storyId, storyName }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant='destructive'>Delete</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Delete Story</DialogTitle>
        <DeleteStoryContent
          setOpen={setOpen}
          storyId={storyId}
          storyName={storyName}
        />
        <DialogClose asChild>
          <XIcon size={20} />
        </DialogClose>
      </DialogContent>
    </Dialog>
  )
}
