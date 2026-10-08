import clsx from 'clsx'

import styles from './LabelRow.module.css'

import { Label } from '../ui/Label'

type Props = {
  label: string
  labelHtmlFor?: string
  children: React.ReactNode
}

export function LabelRow({ label, labelHtmlFor, children }: Props) {
  return (
    <div
      className={clsx(styles.labelRow)}
    >
      <Label htmlFor={labelHtmlFor}>{label}</Label>
      <div>{children}</div>
    </div>
  )
}
