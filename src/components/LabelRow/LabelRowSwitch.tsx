'use client'

import { useId } from 'react'

import { Switch } from '../ui/Switch'
import { LabelRow } from './LabelRow'

type Props = {
  label: string
  checked?: boolean
  onCheckedChange?(checked: boolean): void
}

export function LabelRowSwitch({ label, checked, onCheckedChange }: Props) {
  const id = useId()

  return (
    <LabelRow label={label} labelHtmlFor={id}>
      <Switch id={id} checked={checked} onCheckedChange={onCheckedChange} />
    </LabelRow>
  )
}
