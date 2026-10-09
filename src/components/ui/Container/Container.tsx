import { ComponentProps } from 'react'
import clsx from 'clsx'

import styles from './Container.module.css'

export type ContainerProps = {
  withPaddingBlock?: boolean
  withContentSpacing?: boolean
  spacing?: 'none' | 'lg' | 'xl'
} & ComponentProps<'div'>

export function Container({
  className,
  withPaddingBlock = false,
  withContentSpacing = false,
  spacing = 'none',
  ...rest
}: ContainerProps) {
  return (
    <div
      className={clsx(
        styles.container,
        withPaddingBlock && styles.withPaddingBlock,
        withContentSpacing && styles.withContentSpacing,
        styles[spacing],
        className
      )}
      {...rest}
    />
  )
}
