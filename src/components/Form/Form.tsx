import { ComponentProps } from 'react'
import clsx from 'clsx'

import styles from './Form.module.css'

type Props = {
  preventDefault?: boolean
  spacing?: 'sm' | 'md'
} & ComponentProps<'form'>

export function Form({
  className,
  preventDefault = true,
  spacing = 'sm',
  onSubmit,
  ...rest
}: Props) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (preventDefault) {
      e.preventDefault()
    }
    if (onSubmit !== undefined) {
      onSubmit(e)
    }
  }

  return (
    <form
      className={clsx(styles.form, styles[spacing], className)}
      onSubmit={handleSubmit}
      {...rest}
    />
  )
}
