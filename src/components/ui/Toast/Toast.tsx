'use client'

import { ComponentProps } from 'react'
import * as ToastPrimitive from '@radix-ui/react-toast'
import clsx from 'clsx'

import styles from './Toast.module.css'

import { ToastVariant } from '@/stores/toast'

export const Toast = ToastPrimitive.Provider

type ToastViewportProps = ComponentProps<typeof ToastPrimitive.ToastViewport>

export function ToastViewport({ className, ...rest }: ToastViewportProps) {
  return (
    <ToastPrimitive.Viewport
      className={clsx(styles.toastViewport, className)}
      {...rest}
    />
  )
}

type ToastRootProps = ComponentProps<typeof ToastPrimitive.Root>

export function ToastRoot({ className, ...rest }: ToastRootProps) {
  return (
    <ToastPrimitive.Root
      className={clsx(styles.toastRoot, className)}
      {...rest}
    />
  )
}

type ToastTitleProps = ComponentProps<typeof ToastPrimitive.Title>

export function ToastTitle({ className, ...rest }: ToastTitleProps) {
  return (
    <ToastPrimitive.Title
      className={clsx(styles.toastTitle, className)}
      {...rest}
    />
  )
}

type ToastDescriptionProps = {
  variant?: ToastVariant
} & ComponentProps<typeof ToastPrimitive.Description>

export function ToastDescription({ className, variant = 'default', ...rest }: ToastDescriptionProps) {
  return (
    <ToastPrimitive.Description
      className={clsx(styles.toastDescription, styles[variant], className)}
      {...rest}
    />
  )
}

type ToastActionProps = ComponentProps<typeof ToastPrimitive.Action>

export function ToastAction({ className, ...rest }: ToastActionProps) {
  return (
    <ToastPrimitive.Action
      className={clsx(styles.toastAction, className)}
      {...rest}
    />
  )
}

type ToastCloseProps = ComponentProps<typeof ToastPrimitive.Close>

export function ToastClose({ className, ...rest }: ToastCloseProps) {
  return (
    <ToastPrimitive.Close
      className={clsx(styles.toastClose, className)}
      {...rest}
    />
  )
}
