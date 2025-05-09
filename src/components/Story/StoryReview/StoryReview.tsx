import Link from "next/link";
import clsx from "clsx";

import styles from "./StoryReview.module.scss";

import { StarRating } from "../../StarRating";
import { Separator } from "../../ui/Separator";
import { P, Span } from "../../ui/Typography";
import { Button } from "../../ui/Button";
import { Badge } from "../../ui/Badge";

interface StoryReviewType {
  _id: string;
  userId: string;
  storyId: string;
  storySlug: string;
  stars: number;
  comment: string;
}

interface StoryReviewWithDetails extends StoryReviewType {
  userName: string;
  storyName: string;
}

interface Props extends StoryReviewWithDetails {
  className?: string;
  shouldShowStoryNameBadge?: boolean;
  shouldShowReadMoreLink?: boolean;
  shouldShowSeparator?: boolean;
}

const StoryReview: React.FC<Props> = ({
  _id,
  comment,
  stars,
  storyId,
  storySlug,
  userName,
  userId,
  storyName,
  className,
  shouldShowStoryNameBadge = false,
  shouldShowReadMoreLink = false,
  shouldShowSeparator = true,
}) => {
  return (
    <div className={clsx(styles.review, className)}>
      <div className={styles.reviewHeader}>
        <Span
          size="lg"
          weight="bold"
          data-review-user-id={userId}
          data-highlighted={false}
          className={styles.reviewUserName}
        >
          {userName}
        </Span>
        {shouldShowStoryNameBadge && <Badge>{storyName}</Badge>}
      </div>
      <StarRating stars={stars} />
      <P>{comment}</P>
      {shouldShowReadMoreLink && (
        <Link
          href={`/s/${storySlug}?view=tabs&tab=reviews`}
          className={styles.reviewLink}
        >
          <Button size="sm" variant="inverse">
            Read more
          </Button>
        </Link>
      )}
      {shouldShowSeparator && <Separator />}
    </div>
  );
};

export { StoryReview, type StoryReviewType, type StoryReviewWithDetails };
