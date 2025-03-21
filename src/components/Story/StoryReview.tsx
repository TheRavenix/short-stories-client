import styles from "./Story.module.scss";

import { StarRating } from "../StarRating";
import { Separator } from "../ui/Separator";
import { P, Span } from "../ui/Typography";
import { Button } from "../ui/Button";
import Link from "next/link";
import { Badge } from "../ui/Badge";

interface StoryReviewType {
  id: string;
  userName: string;
  stars: number;
  comment: string;
  storyId: string;
  storyName: string;
}

interface Props extends StoryReviewType {
  shouldShowStoryNameBadge?: boolean;
  shouldShowReadMoreLink?: boolean;
  shouldShowSeparator?: boolean;
}

const StoryReview: React.FC<Props> = ({
  id,
  userName,
  comment,
  stars,
  storyId,
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
        <Link href={`/library/${storyId}`} className={styles.reviewLink}>
          <Button size="sm">Read more</Button>
        </Link>
      )}
      {shouldShowSeparator && <Separator />}
    </div>
  );
};

export { StoryReview, type StoryReviewType };
