import { ComponentProps } from 'react'
import clsx from 'clsx'

import styles from './Card.module.css'

import { P, Span } from '../Typography'

type CardVariant = 'default' | 'primary'

type CardProps = {
  variant?: CardVariant
  withPadding?: boolean
} & ComponentProps<'div'>

export function Card({
  className,
  variant = 'default',
  withPadding = false,
  ...rest
}: CardProps) {
  return (
    <div
      className={clsx(
        styles.card,
        styles[variant],
        withPadding && styles.withPadding,
        className
      )}
      {...rest}
    />
  )
}

type CardTitleProps = ComponentProps<'span'>

export function CardTitle({ className, ...rest }: CardTitleProps) {
  return (
    <Span
      size='lg'
      weight='bold'
      transform='capitalize'
      className={clsx(styles.cardTitle, className)}
      {...rest}
    />
  )
}

type CardDescriptionProps = ComponentProps<'p'>

export function CardDescription({
  className,
  ...rest
}: CardDescriptionProps) {
  return (
    <P
      variant='gray'
      className={clsx(styles.cardDescription, className)}
      {...rest}
    />
  )
}

type CardHeaderProps = ComponentProps<'div'>

export function CardHeader({ className, ...rest }: CardHeaderProps) {
  return <div className={clsx(styles.cardHeader, className)} {...rest} />
}

type CardContentProps = ComponentProps<'div'>

export function CardContent({ className, ...rest }: CardContentProps) {
  return <div className={clsx(styles.cardContent, className)} {...rest} />
}

type CardFooterProps = ComponentProps<'div'>

export function CardFooter({ className, ...rest }: CardFooterProps) {
  return <div className={clsx(styles.cardFooter, className)} {...rest} />
}
