"use client";

import { Switch } from "@/components/ui/Switch";

import { useStoryReadStore } from "@/stores/story/story-read";

export function LineNumeralsSwitch() {
  const lineNumeralsActive = useStoryReadStore((s) => s.lineNumeralsActive)
  const setLineNumeralsActive = useStoryReadStore(
    (s) => s.setLineNumeralsActive
  )

  return (
    <Switch
      id='line_numerals'
      checked={lineNumeralsActive}
      onCheckedChange={(v) => setLineNumeralsActive(v)}
    />
  )
}
