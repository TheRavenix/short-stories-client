"use client";

import { Switch } from "@/components/ui/Switch";
import { useStoryReadStore } from "@/stores/story/story-read";

export function RomanNumeralsSwitch() {
  const romanNumeralsActive = useStoryReadStore((s) => s.romanNumeralsActive)
  const setRomanNumeralsActive = useStoryReadStore(
    (s) => s.setRomanNumeralsActive
  )

  return (
    <Switch
      id='roman_numerals'
      checked={romanNumeralsActive}
      onCheckedChange={(v) => setRomanNumeralsActive(v)}
    />
  )
}
