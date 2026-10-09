'use client'

import { ComponentProps } from 'react'
import * as SwitchPrimitive from '@radix-ui/react-switch'
import clsx from 'clsx'

import styles from './Switch.module.css'

type Props = ComponentProps<typeof SwitchPrimitive.Root>

export function Switch({ className, ...rest }: Props) {
  return (
    <SwitchPrimitive.Root
      className={clsx(styles.switchRoot, className)}
      {...rest}
    >
      <SwitchPrimitive.Thumb className={clsx(styles.switchThumb)} />
    </SwitchPrimitive.Root>
  )
}
