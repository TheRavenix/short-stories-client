import * as SeparatorPrimitive from "@radix-ui/react-separator";

import styles from "./Separator.module.css";

import clsx from "clsx";

type SeparatorWeight = 'normal' | 'medium' | 'semi-bold' | ''
type SeparatorVariant = 'default' | 'primary'

type Props = {
  isVertical?: boolean
  className?: string
  lineClassname?: string
  weight?: SeparatorWeight
  variant?: SeparatorVariant
  horizontalSpacing?: number
  verticalSpacing?: number
}

export function Separator({
  isVertical = false,
  className,
  lineClassname,
  verticalSpacing,
  horizontalSpacing,
  weight = 'normal',
  variant = 'default'
}: Props) {
  return (
    <SeparatorPrimitive.Separator
      orientation={isVertical ? 'vertical' : 'horizontal'}
      style={{ paddingInline: horizontalSpacing, paddingBlock: verticalSpacing }}
      className={clsx(styles.base, styles[weight], className)}
    >
      <div className={clsx(styles.line, lineClassname, styles[variant])} />
    </SeparatorPrimitive.Separator>
  )
}
