import { ComponentProps } from 'react'
import clsx from 'clsx'

import styles from './Button.module.css'

type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'page'
  | 'inverse'
  | 'ghost'
  | 'destructive'
type ButtonSize = 'sm' | 'md' | 'lg' | 'icon' | 'full' | 'responsive'
type ButtonShape = 'rounded' | 'squared' | 'circle'

type Props = {
  variant?: ButtonVariant
  size?: ButtonSize
  shape?: ButtonShape
} & ComponentProps<'button'>

export function Button({
  className,
  variant = 'primary',
  size = 'md',
  shape = 'rounded',
  ...rest
}: Props) {
  return (
    <button
      className={clsx(
        styles.button,
        styles[variant],
        styles[size],
        styles[shape],
        className
      )}
      {...rest}
    />
  )
}
