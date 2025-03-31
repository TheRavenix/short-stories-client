import { MessageCircleIcon } from "lucide-react";

import styles from "./Story.module.scss";

import { Stats } from "../Stats";
import { Card, CardContent, CardHeader } from "../ui/Card";
import { Show } from "../Show";
import { EmptyState } from "../EmptyState";
import { StoryReview, StoryReviewType } from "./StoryReview";
import { StoryLeaveReview } from "./StoryLeaveReview";
import { P } from "../ui/Typography";

interface Props {
  name: string;
  reviews: StoryReviewType[];
}

const StoryReviewsCard: React.FC<Props> = ({ name, reviews }) => {
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
        <StoryLeaveReview />
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
              <StoryReview key={review.id} {...review} />
            ))}
          </div>
        </Show>
      </CardContent>
    </Card>
  );
};

export { StoryReviewsCard };
