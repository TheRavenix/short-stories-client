"use client";

import { DeleteStoryDialog } from "./DeleteStoryDialog";
import { DeleteStoryDrawer } from "./DeleteStoryDrawer";

import { useIsMobile, useProfile } from "@/hooks";

interface Props {
  storyId: string;
  storyName: string;
}

const DeleteStory: React.FC<Props> = ({ storyId, storyName }) => {
  const isMobile = useIsMobile();
  const { profile, isLoading } = useProfile();

  if (isLoading || profile?.role !== "admin") return null;

  return isMobile ? (
    <DeleteStoryDrawer storyId={storyId} storyName={storyName} />
  ) : (
    <DeleteStoryDialog storyId={storyId} storyName={storyName} />
  );
};

export { DeleteStory };
