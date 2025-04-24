import { MessageCircleIcon } from "lucide-react";

import styles from "./FeaturedReviewsSection.module.scss";

import { H1 } from "@/components/ui/Typography";
import { Show } from "@/components/Show";
import { EmptyState } from "@/components/EmptyState";
import { StoryReview, StoryReviewWithDetails } from "@/components/Story";
import { Card, CardContent } from "@/components/ui/Card";

interface Props {
  reviews: StoryReviewWithDetails[];
}

const FeaturedReviewsSection: React.FC<Props> = ({ reviews }) => {
  return (
    <div className={styles.reviews}>
      <H1 transform="capitalize" className={styles.headline}>
        Featured reviews
      </H1>
      <Show
        when={reviews.length > 0}
        fallback={
          <EmptyState
            icon={<MessageCircleIcon />}
            message="No reviews available yet. Be the first to share your thoughts!"
          />
        }
      >
        <div className={styles.reviewsList}>
          {reviews.map((review) => (
            <Card key={review._id}>
              <CardContent className={styles.reviewsCardContent}>
                <StoryReview
                  {...review}
                  shouldShowSeparator={false}
                  shouldShowStoryNameBadge
                  shouldShowReadMoreLink
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </Show>
    </div>
  );
};

export { FeaturedReviewsSection };
