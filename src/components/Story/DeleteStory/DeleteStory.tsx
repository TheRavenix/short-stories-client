"use client";

import { DeleteStoryDialog } from "./DeleteStoryDialog";
import { DeleteStoryDrawer } from "./DeleteStoryDrawer";
import { useIsMobile } from "@/hooks/media/use-media-utils";
import { useProfile } from "@/hooks/profile";

type Props = {
  storyId: number
  storyName: string
}

export function DeleteStory({ storyId, storyName }: Props) {
  const isMobile = useIsMobile()
  const { profile, isLoading } = useProfile()

  if (isLoading || profile?.role !== 'admin') {
    return null
  }

  return isMobile ? (
    <DeleteStoryDrawer storyId={storyId} storyName={storyName} />
  ) : (
    <DeleteStoryDialog storyId={storyId} storyName={storyName} />
  )
}
