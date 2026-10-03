"use client";

import { SelectProps } from "@radix-ui/react-select";
import { useQuery } from "@tanstack/react-query";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import { useFontStore } from "@/stores/font";
import { useProfile } from "@/hooks/profile";
import { removeHyphen, capitalize } from "@/utils/text";
import { getAllProFonts } from "@/services/pro-font";

type Props = SelectProps

export function UiFontSelect(props: Props) {
  const uiFont = useFontStore((s) => s.uiFont)
  const setUiFont = useFontStore((s) => s.setUiFont)
  const { profile } = useProfile()
  const { data: proFonts } = useQuery({
    queryKey: ['pro-fonts'],
    queryFn: getAllProFonts
  })

  return (
    <Select value={uiFont} onValueChange={setUiFont}>
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel variant='primary'>Free</SelectLabel>
          <SelectItem value='inter'>Inter</SelectItem>
          <SelectItem value='source-sans3'>Source Sans 3</SelectItem>
        </SelectGroup>
        {profile?.plan === 'pro' && (
          <SelectGroup>
            <SelectLabel variant='primary'>Pro</SelectLabel>
            {proFonts?.ui &&
              Object.keys(proFonts?.ui).map((name) => {
                return (
                  <SelectItem key={name} value={name}>
                    {removeHyphen(capitalize(name))}
                  </SelectItem>
                )
              })}
          </SelectGroup>
        )}
      </SelectContent>
    </Select>
  )
}
