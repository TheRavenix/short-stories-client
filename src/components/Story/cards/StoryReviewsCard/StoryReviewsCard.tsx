"use client";

import { MessageCircleIcon } from "lucide-react";

import styles from "./StoryReviewsCard.module.scss";

import { EmptyState } from "@/components/EmptyState";
import { Show } from "@/components/Show";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { P } from "@/components/ui/Typography";
import { Stats } from "@/components/Stats";
import { CreateStoryReview } from "../../StoryReview";
import { StoryReview, StoryReviewWithDetails } from "../../StoryReview";
import { Skeleton } from "@/components/Skeleton";

import { useProfile } from "@/hooks/profile";

interface Props {
  id: string;
  name: string;
  reviews: StoryReviewWithDetails[];
}

const StoryReviewsCard: React.FC<Props> = ({ id, name, reviews }) => {
  const { profile, isLoading } = useProfile();
  const userReview = reviews.find((r) => r.userId === profile?._id);

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <P
            size="xl"
            weight="semi-bold"
            transform="capitalize"
            className={styles.uiFont}
          >
            {name}'s reviews
          </P>
        </CardHeader>
        <CardContent>
          <Skeleton type="card" height="125px" />
        </CardContent>
      </Card>
    );
  }

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
        {!userReview && <CreateStoryReview storyId={id} />}
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
            {userReview && (
              <StoryReview
                {...userReview}
                shouldShowEditButton
                shouldShowDeleteButton
                shouldHighlightUserName
              />
            )}
            {reviews
              .filter((r) => r.userId !== profile?._id)
              .map((review) => (
                <StoryReview
                  key={review._id}
                  {...review}
                  shouldShowDeleteButton={profile?.role === "admin"}
                />
              ))}
          </div>
        </Show>
      </CardContent>
    </Card>
  );
};

export { StoryReviewsCard };
