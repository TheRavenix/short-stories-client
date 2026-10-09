'use client'

import { ComponentProps } from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import clsx from 'clsx'

import styles from './Dialog.module.css'

export const Dialog = DialogPrimitive.Root

type DialogTriggerProps = ComponentProps<typeof DialogPrimitive.Trigger>

export function DialogTrigger({ className, children, ...rest }: DialogTriggerProps) {
  return (
    <DialogPrimitive.Trigger
      className={clsx(styles.dialogTrigger, className)}
      {...rest}
    >
      {children}
    </DialogPrimitive.Trigger>
  )
}

export const DialogPortal = DialogPrimitive.Portal

type DialogOverlayProps = ComponentProps<typeof DialogPrimitive.Overlay>

export function DialogOverlay({ className, children, ...rest }: DialogOverlayProps) {
  return (
    <DialogPrimitive.Overlay
      className={clsx(styles.dialogOverlay, className)}
      {...rest}
    >
      {children}
    </DialogPrimitive.Overlay>
  )
}

type DialogContentProps = ComponentProps<typeof DialogPrimitive.Content>

export function DialogContent({ className, children, ...rest }: DialogContentProps) {
  return (
    <DialogPortal>
      <DialogOverlay>
        <DialogPrimitive.Content
          className={clsx(styles.dialogContent, className)}
          {...rest}
        >
          {children}
        </DialogPrimitive.Content>
      </DialogOverlay>
    </DialogPortal>
  )
}

type DialogTitleProps = ComponentProps<typeof DialogPrimitive.Title>

export function DialogTitle({ className, children, ...rest }: DialogTitleProps) {
  return (
    <DialogPrimitive.Title
      className={clsx(styles.dialogTitle, className)}
      {...rest}
    >
      {children}
    </DialogPrimitive.Title>
  )
}

type DialogDescriptionProps = ComponentProps<typeof DialogPrimitive.Description>

export function DialogDescription({ className, children, ...rest }: DialogDescriptionProps) {
  return (
    <DialogPrimitive.Description
      className={clsx(styles.dialogDescription, className)}
      {...rest}
    >
      {children}
    </DialogPrimitive.Description>
  )
}

type DialogCloseProps = ComponentProps<typeof DialogPrimitive.Close>

export function DialogClose({ className, children, ...rest }: DialogCloseProps) {
  return (
    <DialogPrimitive.Close
      className={clsx(styles.dialogClose, className)}
      {...rest}
    >
      {children}
    </DialogPrimitive.Close>
  )
}
