"use client";

import styles from "./StoryLeaveReview.module.scss";

import { StoryLeaveReviewDrawer } from "./StoryLeaveReviewDrawer";
import { StoryLeaveReviewDialog } from "./StoryLeaveReviewDialog";

import { useIsMobile } from "@/hooks/use-media-utils";
import { useAuthStore } from "@/stores/auth";

interface Props {
  storyId: string;
}

const StoryLeaveReview: React.FC<Props> = ({ storyId }) => {
  const isMobile = useIsMobile();
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);

  if (!isAuthenticated) return null;

  return isMobile ? (
    <StoryLeaveReviewDrawer storyId={storyId} />
  ) : (
    <StoryLeaveReviewDialog storyId={storyId} />
  );
};

export { StoryLeaveReview };
