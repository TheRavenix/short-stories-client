import clsx from 'clsx'

import styles from './Container.module.css'

import { ContainerProps } from './Container'

type Props = ContainerProps

export function CompactContainer({
  className,
  withPaddingBlock = false,
  withContentSpacing = false,
  spacing = 'none',
  ...rest
}: Props) {
  return (
    <div
      className={clsx(
        styles.compactContainer,
        withPaddingBlock && styles.withPaddingBlock,
        withContentSpacing && styles.withContentSpacing,
        styles[spacing],
        className
      )}
      {...rest}
    />
  )
}
