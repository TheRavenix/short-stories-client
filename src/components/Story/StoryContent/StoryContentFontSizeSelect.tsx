"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import { useStoryReadStore } from "@/stores/story/story-read";

export function StoryContentFontSizeSelect() {
  const fontSize = useStoryReadStore((s) => s.fontSize)
  const setFontSize = useStoryReadStore((s) => s.setFontSize)

  return (
    <Select defaultValue={fontSize} onValueChange={setFontSize}>
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value='14px'>Small</SelectItem>
          <SelectItem value='16px'>Normal</SelectItem>
          <SelectItem value='18px'>Medium</SelectItem>
          <SelectItem value='20px'>Large</SelectItem>
          <SelectItem value='24px'>Extra Large</SelectItem>
          <SelectItem value='28px'>XXL</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
