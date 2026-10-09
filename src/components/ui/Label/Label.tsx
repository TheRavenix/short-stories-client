'use client'

import { ComponentProps } from 'react'
import * as LabelPrimitive from '@radix-ui/react-label'
import clsx from 'clsx'

import styles from './Label.module.css'

type Props = ComponentProps<typeof LabelPrimitive.Root>

export function Label({ className, ...rest }: Props) {
  return (
    <LabelPrimitive.Root
      className={clsx(styles.labelRoot, className)}
      {...rest}
    />
  )
}
