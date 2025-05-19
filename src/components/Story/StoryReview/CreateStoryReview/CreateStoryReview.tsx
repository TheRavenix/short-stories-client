"use client";

import styles from "./CreateStoryReview.module.scss";

import { CreateStoryReviewDrawer } from "./CreateStoryReviewDrawer";
import { CreateStoryReviewDialog } from "./CreateStoryReviewDialog";

import { useIsMobile } from "@/hooks/media";
import { useAuthStore } from "@/stores/auth";

interface Props {
  storyId: string;
}

const CreateStoryReview: React.FC<Props> = ({ storyId }) => {
  const isMobile = useIsMobile();
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);

  if (!isAuthenticated) return null;

  return isMobile ? (
    <CreateStoryReviewDrawer storyId={storyId} />
  ) : (
    <CreateStoryReviewDialog storyId={storyId} />
  );
};

export { CreateStoryReview };
