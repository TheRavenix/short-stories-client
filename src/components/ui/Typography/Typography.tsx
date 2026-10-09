import { ComponentProps } from 'react'
import clsx from 'clsx'

import styles from './Typography.module.css'

type Transform = 'capitalize' | 'uppercase'

type SharedProps = {
  transform?: Transform
}

type HeadingVariant = 'foreground' | 'primary' | 'heading'

type H1Props = {
  variant?: HeadingVariant
} & ComponentProps<'h1'> & SharedProps

export function H1({
  className,
  transform,
  variant = 'heading',
  ...rest
}: H1Props) {
  return (
    <h1
      className={clsx(
        styles.h1,
        transform && styles[transform],
        variant === 'heading' ? styles.headingForeground : styles[variant],
        className
      )}
      {...rest}
    />
  )
}

type H2Props = {
  variant?: HeadingVariant
} & ComponentProps<'h2'> & SharedProps

export function H2({
  className,
  transform,
  variant = 'foreground',
  ...rest
}: H2Props) {
  return (
      <h2
        className={clsx(
          styles.h2,
          transform && styles[transform],
          variant === 'heading' ? styles.headingForeground : styles[variant],
          className
        )}
        {...rest}
      />
  )
}

type H3Props = {
  variant?: HeadingVariant
} & ComponentProps<'h3'> & SharedProps

export function H3({
  className,
  transform,
  variant = 'foreground',
  ...rest
}: H3Props) {
  return (
      <h3
        className={clsx(
          styles.h3,
          transform && styles[transform],
          variant === 'heading' ? styles.headingForeground : styles[variant],
          className
        )}
        {...rest}
      />
  )
}

type FontSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | 'xxl'
type FontWeight = 'normal' | 'medium' | 'semi-bold' | 'bold'
type TextVariant = 'foreground' | 'primary' | 'gray'

export type ParagraphProps = {
  size?: FontSize
  weight?: FontWeight
  variant?: TextVariant
} & ComponentProps<'p'> & SharedProps

export function P({
  className,
  size = 'base',
  weight = 'normal',
  variant = 'foreground',
  transform,
  ...rest
}: ParagraphProps) {
  return (
      <p
        className={clsx(
          styles.p,
          styles[size],
          styles[weight],
          styles[variant],
          transform && styles[transform],
          className
        )}
        {...rest}
      />
  )
}

export type SpanProps = {
  size?: FontSize
  weight?: FontWeight
  variant?: TextVariant
} & ComponentProps<'span'> & SharedProps

export function Span({
  className,
  size = 'sm',
  weight = 'normal',
  variant = 'foreground',
  transform,
  ...rest
}: SpanProps) {
  return (
      <span
        className={clsx(
          styles.span,
          styles[size],
          styles[weight],
          styles[variant],
          transform && styles[transform],
          className
        )}
        {...rest}
      />
  )
}
