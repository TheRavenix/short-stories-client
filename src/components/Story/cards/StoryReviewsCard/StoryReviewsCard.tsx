import { MessageCircleIcon } from "lucide-react";

import styles from "./StoryReviewsCard.module.scss";

import { EmptyState } from "@/components/EmptyState";
import { Show } from "@/components/Show";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { P } from "@/components/ui/Typography";
import { Stats } from "@/components/Stats";
import { StoryLeaveReview } from "../../StoryLeaveReview";
import { StoryReview, StoryReviewWithDetails } from "../../StoryReview";

interface Props {
  id: string;
  name: string;
  reviews: StoryReviewWithDetails[];
}

const StoryReviewsCard: React.FC<Props> = ({ id, name, reviews }) => {
  return (
    <Card>
      <CardHeader className={styles.reviewsCardHeader}>
        <P
          size="xl"
          weight="semi-bold"
          transform="capitalize"
          className={styles.uiFont}
        >
          {name}'s reviews
        </P>
        {reviews.length > 0 && (
          <Stats
            list={[
              {
                icon: <MessageCircleIcon size={16} />,
                value: reviews.length,
              },
            ]}
          />
        )}
      </CardHeader>
      <CardContent className={styles.reviewsCardContent}>
        <StoryLeaveReview storyId={id} />
        <Show
          when={reviews.length > 0}
          fallback={
            <EmptyState
              icon={<MessageCircleIcon />}
              message="No reviews yet. Be the first to share your thoughts!"
            />
          }
        >
          <div className={styles.reviewsCardList}>
            {reviews.map((review) => (
              <StoryReview key={review._id} {...review} />
            ))}
          </div>
        </Show>
      </CardContent>
    </Card>
  );
};

export { StoryReviewsCard };
