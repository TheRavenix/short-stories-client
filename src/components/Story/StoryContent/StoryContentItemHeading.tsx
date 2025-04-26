"use client";

import { H3 } from "@/components/ui/Typography";
import { useStoryReadStore } from "@/stores/story-read";

import { romanize } from "@/utils/romanize";

interface Props {
  index: number;
}

const StoryContentItemHeading: React.FC<Props> = ({ index }) => {
  const lineNumeralsActive = useStoryReadStore((s) => s.lineNumeralsActive);
  const romanNumeralsActive = useStoryReadStore((s) => s.romanNumeralsActive);

  if (!lineNumeralsActive) return null;

  return <H3>{romanNumeralsActive ? romanize(index + 1) : index + 1}</H3>;
};

export { StoryContentItemHeading };
