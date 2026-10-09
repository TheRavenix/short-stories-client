'use client'

import { XIcon } from 'lucide-react'
import { useState } from 'react'

import { Button } from '../../../ui/Button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '../../../ui/Dialog'
import { ChangePasswordContent } from './ChangePasswordContent'

export function ChangePasswordDialog() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size='sm' variant='inverse'>
          Change
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Change Your Password</DialogTitle>
        <ChangePasswordContent setOpen={setOpen} />
        <DialogClose asChild>
          <XIcon size={20} />
        </DialogClose>
      </DialogContent>
    </Dialog>
  )
}
