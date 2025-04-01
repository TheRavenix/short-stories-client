"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";

import { useFontStore } from "@/stores/font";

interface Props {}

const StoryContentFontSizeSelect: React.FC<Props> = () => {
  const readingFontSize = useFontStore((s) => s.readingFontSize);
  const setReadingFontSize = useFontStore((s) => s.setReadingFontSize);

  return (
    <Select defaultValue={readingFontSize} onValueChange={setReadingFontSize}>
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="14px">Small</SelectItem>
          <SelectItem value="16px">Normal</SelectItem>
          <SelectItem value="18px">Medium</SelectItem>
          <SelectItem value="20px">Large</SelectItem>
          <SelectItem value="24px">Extra Large</SelectItem>
          <SelectItem value="28px">XXL</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export { StoryContentFontSizeSelect };
