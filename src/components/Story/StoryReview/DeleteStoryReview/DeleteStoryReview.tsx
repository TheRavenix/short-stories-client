"use client";

import { DeleteStoryReviewDialog } from "./DeleteStoryReviewDialog";
import { DeleteStoryReviewDrawer } from "./DeleteStoryReviewDrawer";

import { useIsMobile } from "@/hooks/media";

interface Props {
  reviewId: string;
}

const DeleteStoryReview: React.FC<Props> = ({ reviewId }) => {
  const isMobile = useIsMobile();

  return isMobile ? (
    <DeleteStoryReviewDrawer reviewId={reviewId} />
  ) : (
    <DeleteStoryReviewDialog reviewId={reviewId} />
  );
};

export { DeleteStoryReview };
