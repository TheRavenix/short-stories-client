import { ComponentProps } from "react";
import clsx from "clsx";

import styles from "./Input.module.css";

import { InputVariant } from "./Input";

type Props = {
  label: string
  variant?: InputVariant
} & ComponentProps<'textarea'>

export function Textarea({ className, label, variant, ...rest }: Props) {
  return (
    <div className={styles.inputContainer}>
      <textarea
        className={clsx(
          styles.textarea,
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
