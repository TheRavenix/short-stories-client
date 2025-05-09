import Link from "next/link";
import clsx from "clsx";
import { PencilIcon } from "lucide-react";
import dayjs from "dayjs";

import styles from "./StoryReview.module.scss";

import { StarRating } from "../../StarRating";
import { Separator } from "../../ui/Separator";
import { P, Span } from "../../ui/Typography";
import { Button } from "../../ui/Button";
import { Badge } from "../../ui/Badge";
import { DeleteStoryReview } from "./DeleteStoryReview";
import { EditStoryReview } from "./EditStoryReview";

interface StoryReviewType {
  _id: string;
  userId: string;
  storyId: string;
  storySlug: string;
  stars: number;
  comment: string;
  createdAt: Date;
  updatedAt: Date;
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
  createdAt,
  updatedAt,
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
        <div>
          <Span
            size="lg"
            weight="bold"
            variant={shouldHighlightUserName ? "primary" : "foreground"}
          >
            {userName || "DELETED USER"}
          </Span>
          <P size="sm">
            {dayjs(createdAt).format("DD/MM/YYYY")}
            {new Date(createdAt).getTime() !== new Date(updatedAt).getTime() &&
              " (edited)"}
          </P>
        </div>
        <div className={styles.reviewHeaderEndContent}>
          {shouldShowEditButton && (
            <EditStoryReview
              reviewId={_id}
              reviewRating={stars}
              reviewComment={comment}
            />
          )}
          {shouldShowDeleteButton && <DeleteStoryReview reviewId={_id} />}
          {shouldShowStoryNameBadge && <Badge>{storyName}</Badge>}
        </div>
      </div>
      <StarRating rating={stars} />
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
