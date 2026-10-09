'use client'

import { ComponentProps } from 'react'
import * as SelectPrimitive from '@radix-ui/react-select'
import clsx from 'clsx'
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from 'lucide-react'

import styles from './Select.module.css'

export const Select = SelectPrimitive.Root

type SelectTriggerProps = ComponentProps<typeof SelectPrimitive.Trigger>

export function SelectTrigger({ className, children, ...rest }: SelectTriggerProps) {
  return (
    <SelectPrimitive.Trigger
      className={clsx(styles.selectTrigger, className)}
      {...rest}
    >
      {children}
      <SelectPrimitive.Icon className={styles.selectIcon}>
        <ChevronDownIcon size={18} />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
}

export const SelectValue = SelectPrimitive.Value

type SelectContentProps = ComponentProps<typeof SelectPrimitive.Content>

export function SelectContent({ className, children, ...rest }: SelectContentProps) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        className={clsx(styles.selectContent, className)}
        position='popper'
        {...rest}
      >
        <SelectPrimitive.ScrollUpButton className={styles.selectScrollButton}>
          <ChevronUpIcon size={18} />
        </SelectPrimitive.ScrollUpButton>
        <SelectPrimitive.Viewport className={styles.selectViewport}>
          {children}
        </SelectPrimitive.Viewport>
        <SelectPrimitive.ScrollDownButton className={styles.selectScrollButton}>
          <ChevronDownIcon size={18} />
        </SelectPrimitive.ScrollDownButton>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
}

type SelectItemProps = ComponentProps<typeof SelectPrimitive.Item>

export function SelectItem({ className, children, ...rest }: SelectItemProps) {
  return (
    <SelectPrimitive.Item
      className={clsx(styles.selectItem, className)}
      {...rest}
    >
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator className={styles.selectItemIndicator}>
        <CheckIcon size={18} />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  )
}

type SelectLabelProps = {
  variant?: 'default' | 'primary'
} & ComponentProps<typeof SelectPrimitive.Label>

export function SelectLabel({ className, variant = 'default', ...rest }: SelectLabelProps) {
  return (
    <SelectPrimitive.Label
      className={clsx(styles.selectLabel, styles[variant], className)}
      {...rest}
    />
  )
}

export const SelectGroup = SelectPrimitive.Group

type SelectSeparatorProps = ComponentProps<typeof SelectPrimitive.Separator>

export function SelectSeparator({ className, ...rest }: SelectSeparatorProps) {
  return (
    <SelectPrimitive.Separator
      className={clsx(styles.selectSeparator, className)}
      {...rest}
    />
  )
}
