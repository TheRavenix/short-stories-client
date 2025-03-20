import Link from "next/link";
import Image from "next/image";
import { DownloadIcon, EyeIcon } from "lucide-react";

import styles from "./Story.module.scss";

import { Card, CardDescription, CardTitle } from "../ui/Card";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { StoryDownloadButton } from "./StoryDownloadButton";
import { StarRating } from "../StarRating";
import { StoryReadButton } from "./StoryReadButton";
import { Stats } from "../Stats";

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
  preview: string[];
  genre: string[];
  coverImage: string;
  views: number;
  downloads: number;
  reviews: StoryReviewType[];
  isFree: boolean;
  createdAt: Date;
  updatedAt: Date;
}

interface Props extends StoryType {
  shouldShowTitle?: boolean;
  shouldShowExploreLink?: boolean;
  shouldShowReadButton?: boolean;
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
  downloads,
  reviews,
  isFree,
  shouldShowTitle = true,
  shouldShowExploreLink = true,
  shouldShowReadButton = false,
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
          {shouldShowReadButton && <StoryReadButton id={id} isFree={isFree} />}
          {shouldShowDownloadButton && (
            <StoryDownloadButton isFree={isFree} coverImage={coverImage} />
          )}
        </div>
      </div>
      {shouldShowStats && (
        <div className={styles.statsWrapper}>
          <Stats
            list={[
              {
                icon: <EyeIcon size={16} />,
                value: views,
              },
              {
                icon: <DownloadIcon size={16} />,
                value: downloads,
              },
            ]}
          />
        </div>
      )}
    </Card>
  );
};

export { Story, type StoryType };
