import { ComponentProps } from "react";
import clsx from "clsx";

import styles from "./Badge.module.css";

type BadgeVariant = 'primary' | 'secondary' | 'page' | 'inverse'
type BadgeSize = 'sm' | 'md' | 'lg'

type Props = {
  variant?: BadgeVariant
  size?: BadgeSize
} & ComponentProps<'div'>

export function Badge({
  className,
  variant = 'primary',
  size = 'md',
  ...rest
}: Props) {
  return (
    <div
      className={clsx(styles.badge, styles[variant], styles[size], className)}
      {...rest}
    />
  )
}
