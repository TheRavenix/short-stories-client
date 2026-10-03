"use client";

import { CreateStoryReviewDrawer } from "./CreateStoryReviewDrawer";
import { CreateStoryReviewDialog } from "./CreateStoryReviewDialog";
import { useAuthStore } from "@/stores/auth";
import { useIsMobile } from "@/hooks/media/use-media-utils";

type Props = {
  storyId: number
}

export function CreateStoryReview({ storyId }: Props) {
  const isMobile = useIsMobile()
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated)

  if (!isAuthenticated) {
    return null
  }

  return isMobile ? (
    <CreateStoryReviewDrawer storyId={storyId} />
  ) : (
    <CreateStoryReviewDialog storyId={storyId} />
  )
}
