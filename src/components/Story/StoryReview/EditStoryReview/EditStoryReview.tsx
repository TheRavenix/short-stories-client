"use client";

import styles from "./EditStoryReview.module.scss";

import { EditStoryReviewDrawer } from "./EditStoryReviewDrawer";
import { EditStoryReviewDialog } from "./EditStoryReviewDialog";

import { useIsMobile } from "@/hooks";
import { useAuthStore } from "@/stores";

interface Props {
  reviewId: string;
  reviewRating: number;
  reviewComment: string;
}

const EditStoryReview: React.FC<Props> = ({
  reviewId,
  reviewRating,
  reviewComment,
}) => {
  const isMobile = useIsMobile();
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);

  if (!isAuthenticated) return null;

  return isMobile ? (
    <EditStoryReviewDrawer
      reviewId={reviewId}
      reviewRating={reviewRating}
      reviewComment={reviewComment}
    />
  ) : (
    <EditStoryReviewDialog
      reviewId={reviewId}
      reviewRating={reviewRating}
      reviewComment={reviewComment}
    />
  );
};

export { EditStoryReview };
