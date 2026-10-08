'use client'

import { useId } from 'react'

import { LabelRow } from './LabelRow'
import { 
  Select,
  SelectContent, 
  SelectGroup, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '../ui/Select'

type Props = {
  label: string
  placeholder?: string
  defaultValue?: string
  onValueChange?(value: string): void
  selectItems: { value: string, children?: React.ReactNode }[]
}

export function LabelRowSelect({ 
  label,
  placeholder,
  defaultValue, 
  onValueChange, 
  selectItems 
}: Props) {
  const id = useId()

  return (
    <LabelRow label={label} labelHtmlFor={id}>
      <Select defaultValue={defaultValue} onValueChange={onValueChange}>
        <SelectTrigger>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {selectItems.map((selectItem) => (
              <SelectItem 
                key={selectItem.value} 
                value={selectItem.value}
                >
                {selectItem.children}
              </SelectItem>
              ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </LabelRow>
  )
}
