import Link from "next/link";
import Image from "next/image";
import { EyeIcon } from "lucide-react";

import styles from "./Story.module.scss";

import { Card, CardDescription, CardTitle } from "../ui/Card";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { StoryDownloadButton } from "./StoryDownloadButton";
import { Span } from "../ui/Typography";
import { StarRating } from "../StarRating";

interface StoryReviewType {
  id: string;
  userName: string;
  stars: number;
  comment: string;
}

interface StoryType {
  id: string;
  name: string;
  description: string;
  preview: string;
  genre: string[];
  coverImage: string;
  views: number;
  reviews: StoryReviewType[];
  isFree: boolean;
  createdAt: Date;
  updatedAt: Date;
}

interface Props extends StoryType {
  shouldShowTitle?: boolean;
  shouldShowExploreLink?: boolean;
  shouldShowDownloadButton?: boolean;
  shouldShowStats?: boolean;
}

const Story: React.FC<Props> = ({
  id,
  name,
  description,
  genre,
  coverImage,
  views,
  reviews,
  isFree,
  shouldShowTitle = true,
  shouldShowExploreLink = true,
  shouldShowDownloadButton = false,
  shouldShowStats = false,
}) => {
  return (
    <Card withPadding className={styles.story}>
      <div className={styles.genre}>
        <Badge vaiant="inverse">{isFree ? "Free" : "Paid"}</Badge>
        {genre.map((item) => (
          <Badge key={item}>{item}</Badge>
        ))}
      </div>
      <Image
        className={styles.coverImage}
        src={coverImage}
        alt={`${name} Cover`}
        width={178.5}
        height={200}
      />
      <div className={styles.content}>
        <StarRating
          stars={reviews.reduce((a, b) => a + b.stars, 0) / reviews.length}
        />
        {shouldShowTitle && <CardTitle>{name}</CardTitle>}
        <CardDescription variant="gray">{description}</CardDescription>
        <div className={styles.actions}>
          {shouldShowExploreLink && (
            <Link href={`/library/${id}`} className={styles.actionLink}>
              <Button>Explore</Button>
            </Link>
          )}
          {shouldShowDownloadButton && (
            <StoryDownloadButton isFree={isFree} coverImage={coverImage} />
          )}
        </div>
      </div>
      {shouldShowStats && (
        <div className={styles.stats}>
          <div className={styles.stat}>
            <EyeIcon size={16} />
            <Span weight="bold">{views}</Span>
          </div>
        </div>
      )}
    </Card>
  );
};

export { Story, type StoryType };
