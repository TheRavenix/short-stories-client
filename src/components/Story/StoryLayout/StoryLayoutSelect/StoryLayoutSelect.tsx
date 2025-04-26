"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";

import { useProfile } from "@/hooks";
import { useStoryStore } from "@/stores";

interface Props {}

const StoryLayoutSelect: React.FC<Props> = () => {
  const storyLayout = useStoryStore((s) => s.storyLayout);
  const setStoryLayout = useStoryStore((s) => s.setStoryLayout);
  const { profile } = useProfile();

  if (profile?.plan !== "pro") return null;

  return (
    <Select value={storyLayout} onValueChange={setStoryLayout}>
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="card">Card</SelectItem>
          <SelectItem value="book">Book</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export { StoryLayoutSelect };
