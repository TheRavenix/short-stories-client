import styles from "./Story.module.scss";

import { StarRating } from "../StarRating";
import { Separator } from "../ui/Separator";
import { P, Span } from "../ui/Typography";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { StoryViewLink } from "./StoryView";

interface StoryReviewType {
  _id: string;
  userId: string;
  storyId: string;
  stars: number;
  comment: string;
}

interface StoryReviewWithDetails extends StoryReviewType {
  userName: string;
  storyName: string;
}

interface Props extends StoryReviewWithDetails {
  shouldShowStoryNameBadge?: boolean;
  shouldShowReadMoreLink?: boolean;
  shouldShowSeparator?: boolean;
}

const StoryReview: React.FC<Props> = ({
  _id,
  comment,
  stars,
  storyId,
  userName,
  storyName,
  shouldShowStoryNameBadge = false,
  shouldShowReadMoreLink = false,
  shouldShowSeparator = true,
}) => {
  return (
    <div className={styles.review}>
      <div className={styles.reviewHeader}>
        <Span size="lg" weight="bold">
          {userName}
        </Span>
        {shouldShowStoryNameBadge && <Badge>{storyName}</Badge>}
      </div>
      <StarRating stars={stars} />
      <P>{comment}</P>
      {shouldShowReadMoreLink && (
        <StoryViewLink
          href={`/library/${storyId}`}
          className={styles.reviewLink}
        >
          <Button size="sm" variant="inverse">
            Read more
          </Button>
        </StoryViewLink>
      )}
      {shouldShowSeparator && <Separator />}
    </div>
  );
};

export { StoryReview, type StoryReviewType, type StoryReviewWithDetails };
