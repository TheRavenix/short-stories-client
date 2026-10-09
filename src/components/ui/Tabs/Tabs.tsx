'use client'

import { ComponentProps } from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import clsx from 'clsx'

import styles from './Tabs.module.css'

export const Tabs = TabsPrimitive.Root

type TabsListProps = {
  fullWidth?: boolean
} & ComponentProps<typeof TabsPrimitive.TabsList>

export function TabsList({ className, fullWidth = false, ...rest }: TabsListProps) {
  return (
    <TabsPrimitive.List
      className={clsx(styles.tabsList, fullWidth && styles.fullWidth, className)}
      {...rest}
    />
  )
}

type TabsTriggerProps = ComponentProps<typeof TabsPrimitive.TabsTrigger>

export function TabsTrigger({ className, ...rest }: TabsTriggerProps) {
  return (
    <TabsPrimitive.Trigger
      className={clsx(styles.tabsTrigger, className)}
      {...rest}
    />
  )
}

type TabsContentProps = ComponentProps<typeof TabsPrimitive.TabsContent>

export function TabsContent({ className, ...rest }: TabsContentProps) {
  return (
    <TabsPrimitive.Content
      className={clsx(styles.tabsContent, className)}
      {...rest}
    />
  )
}
