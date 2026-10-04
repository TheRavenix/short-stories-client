import { ComponentProps } from "react";
import clsx from "clsx";

import styles from "./Input.module.css";

export type InputVariant = 'default' | 'destructive'

type Props = {
  label: string
  variant?: InputVariant
} & Omit<ComponentProps<'input'>, 'size'>

export function Input({
  className,
  label,
  variant = 'default',
  ...rest
}: Props) {
  return (
    <div className={styles.inputContainer}>
      <input
        className={clsx(
          styles.input,
          variant === 'destructive' && styles.inputDestructive,
          className
        )}
        placeholder=' '
        {...rest}
      />
      <label
        className={clsx(
          styles.label,
          variant === 'destructive' && styles.labelDestructive
        )}
      >
        {label}
      </label>
    </div>
  )
}
