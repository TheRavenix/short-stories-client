import Link from "next/link";
import clsx from "clsx";
import { PencilIcon, TrashIcon } from "lucide-react";

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

interface StoryReviewProps extends StoryReviewWithDetails {
  className?: string;
  shouldShowStoryNameBadge?: boolean;
  shouldShowReadMoreLink?: boolean;
  shouldShowSeparator?: boolean;
  shouldShowEditButton?: boolean;
  shouldShowDeleteButton?: boolean;
  shouldHighlightUserName?: boolean;
}

const StoryReview: React.FC<StoryReviewProps> = ({
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
  shouldShowEditButton = false,
  shouldShowDeleteButton = false,
  shouldHighlightUserName = false,
}) => {
  return (
    <div className={clsx(styles.review, className)}>
      <div className={styles.reviewHeader}>
        <Span
          size="lg"
          weight="bold"
          variant={shouldHighlightUserName ? "primary" : "foreground"}
        >
          {userName}
        </Span>
        <div className={styles.reviewHeaderEndContent}>
          {shouldShowEditButton && (
            <Button variant="inverse" size="icon">
              <PencilIcon size={20} />
            </Button>
          )}
          {shouldShowDeleteButton && (
            <Button variant="destructive" size="icon">
              <TrashIcon size={20} />
            </Button>
          )}
          {shouldShowStoryNameBadge && <Badge>{storyName}</Badge>}
        </div>
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

export {
  StoryReview,
  type StoryReviewType,
  type StoryReviewWithDetails,
  type StoryReviewProps,
};
