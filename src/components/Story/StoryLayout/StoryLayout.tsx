"use client";

import { StoryBookLayout } from "./StoryBookLayout";
import { StoryContentType } from "../StoryContent";
import { StoryCardLayout } from "./StoryCardLayout";

import { useProfile } from "@/hooks/profile";
import { useStoryStore } from "@/stores/story";

type Props = {
  id: number
  storyId: number
  storyContent: StoryContentType
}

export function StoryLayout({ id, storyId, storyContent }: Props) {
  const { profile } = useProfile()
  const storyLayout = useStoryStore((s) => s.storyLayout)

  if (profile?.plan === 'free') {
    return <StoryCardLayout storyContent={storyContent} />
  }
  if (profile?.plan === 'pro' && storyLayout === 'book') {
    return (
      <StoryBookLayout
        id={id}
        storyId={storyId}
        storyContent={storyContent}
      />
    )
  }

  return <StoryCardLayout storyContent={storyContent} />
}
