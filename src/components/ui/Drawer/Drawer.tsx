'use client'

import { ComponentProps, HTMLAttributes } from 'react'
import { Drawer as DrawerPrimitive } from 'vaul'
import clsx from 'clsx'

import styles from './Drawer.module.css'

type DrawerProps = ComponentProps<typeof DrawerPrimitive.Root>

export function Drawer({ shouldScaleBackground = true, ...rest }: DrawerProps) {
  return (
    <DrawerPrimitive.Root
      shouldScaleBackground={shouldScaleBackground}
      {...rest}
    />
  )
}

export const DrawerTrigger = DrawerPrimitive.Trigger

export const DrawerPortal = DrawerPrimitive.Portal

export const DrawerClose = DrawerPrimitive.Close

type DrawerOverlayProps = ComponentProps<typeof DrawerPrimitive.Overlay>

export function DrawerOverlay({ className, ...rest }: DrawerOverlayProps) {
  return (
    <DrawerPrimitive.Overlay
      className={clsx(styles.overlay, className)}
      {...rest}
    />
  )
}

type DrawerContentProps = ComponentProps<typeof DrawerPrimitive.Content>

export function DrawerContent({ className, children, ...rest }: DrawerContentProps) {
  return (
    <DrawerPortal>
      <DrawerOverlay />
      <DrawerPrimitive.Content
        className={clsx(styles.drawerContent, className)}
        {...rest}
      >
        {children}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  )
}

type DrawerHandleProps = ComponentProps<typeof DrawerPrimitive.Handle>

export function DrawerHandle({ className, ...rest }: DrawerHandleProps) {
  return (
    <DrawerPrimitive.Handle
      className={clsx(styles.drawerHandle, className)}
      {...rest}
    />
  )
}

type DrawerHeaderProps = HTMLAttributes<HTMLDivElement>

export function DrawerHeader({ className, ...rest }: DrawerHeaderProps) {
  return (
    <div className={clsx(styles.drawerHeader, className)} {...rest} />
  )
}

type DrawerBodyProps = HTMLAttributes<HTMLDivElement>

export function DrawerBody({ className, ...rest }: DrawerBodyProps) {
  return (
    <div className={clsx(styles.drawerBody, className)} {...rest} />
  )
}

type DrawerFooterProps = HTMLAttributes<HTMLDivElement>

export function DrawerFooter({ className, ...rest }: DrawerFooterProps) {
  return (
    <div className={clsx(styles.drawerFooter, className)} {...rest} />
  )
}

type DrawerTitleProps = ComponentProps<typeof DrawerPrimitive.Title>

export function DrawerTitle({ className, ...rest }: DrawerTitleProps) {
  return (
    <DrawerPrimitive.Title
      className={clsx(styles.drawerTitle, className)}
      {...rest}
    />
  )
}

type DrawerDescriptionProps = ComponentProps<typeof DrawerPrimitive.Description>

export function DrawerDescription({ className, ...rest }: DrawerDescriptionProps) {
  return (
    <DrawerPrimitive.Description
      className={clsx(styles.drawerDescription, className)}
      {...rest}
    />
  )
}
