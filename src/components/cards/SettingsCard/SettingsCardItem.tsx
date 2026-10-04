import clsx from "clsx";

import styles from "./SettingsCard.module.css";

import { Label } from "@/components/ui/Label";

type Props = {
  direction?: 'col' | 'row'
  label: string
  labelHtmlFor?: string
  children: React.ReactNode
}

export function SettingsCardItem({
  direction = 'row',
  label,
  labelHtmlFor,
  children
}: Props) {
  return (
    <div
      className={clsx(
        styles.cardItem,
        direction === 'row' ? styles.cardItemRow : styles.cardItemCol
      )}
    >
      <Label htmlFor={labelHtmlFor}>{label}</Label>
      <div>{children}</div>
    </div>
  )
}
