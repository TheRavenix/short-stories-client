"use client";

import { Show } from "@/components/Show";
import { StoryBookLayout } from "./StoryBookLayout";
import { StoryContentType } from "../StoryContent";
import { StoryCardLayout } from "./StoryCardLayout";

import { useProfile } from "@/hooks/profile";
import { useStoryStore } from "@/stores/story";

interface Props {
  id: string;
  storyId: string;
  storyContent: StoryContentType;
}

const StoryLayout: React.FC<Props> = ({ id, storyId, storyContent }) => {
  const { profile } = useProfile();
  const storyLayout = useStoryStore((s) => s.storyLayout);

  return (
    <Show
      when={profile?.plan === "pro"}
      fallback={<StoryCardLayout storyContent={storyContent} />}
    >
      <Show
        when={storyLayout === "book"}
        fallback={<StoryCardLayout storyContent={storyContent} />}
      >
        <StoryBookLayout
          id={id}
          storyId={storyId}
          storyContent={storyContent}
        />
      </Show>
    </Show>
  );
};

export { StoryLayout };
