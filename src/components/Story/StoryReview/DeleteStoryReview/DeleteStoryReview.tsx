"use client";

import { DeleteStoryReviewDialog } from "./DeleteStoryReviewDialog";
import { DeleteStoryReviewDrawer } from "./DeleteStoryReviewDrawer";
import { useIsMobile } from "@/hooks/media/use-media-utils";

type Props = {
  reviewId: number
}

export function DeleteStoryReview({ reviewId }: Props) {
  const isMobile = useIsMobile()

  return isMobile ? (
    <DeleteStoryReviewDrawer reviewId={reviewId} />
  ) : (
    <DeleteStoryReviewDialog reviewId={reviewId} />
  )
}
