"use client";

import styles from "./StoryLeaveReview.module.scss";

import { StoryLeaveReviewDrawer } from "./StoryLeaveReviewDrawer";
import { StoryLeaveReviewDialog } from "./StoryLeaveReviewDialog";

import { useIsMobile } from "@/hooks/use-media-utils";

interface Props {}

const StoryLeaveReview: React.FC<Props> = () => {
  const isMobile = useIsMobile();

  return isMobile ? <StoryLeaveReviewDrawer /> : <StoryLeaveReviewDialog />;
};

export { StoryLeaveReview };
