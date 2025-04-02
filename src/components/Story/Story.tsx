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
import { storiesReviews } from "@/utils/stories-reviews";
import { StoryViewLink } from "./StoryView/StoryViewLink";

interface StoryType {
  id: string;
  name: string;
  description: string;
  about: string[];
  preview: string[];
  genre: string[];
  coverImage: string;
  views: number;
  downloads: number;
  isFree: boolean;
  createdAt: Date;
  updatedAt: Date;
}

interface Props extends StoryType {
  shouldShowStarRating?: boolean;
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
  isFree,
  shouldShowStarRating = true,
  shouldShowTitle = true,
  shouldShowExploreLink = true,
  shouldShowReadButton = false,
  shouldShowDownloadButton = false,
  shouldShowStats = false,
}) => {
  let reviewsLength = 0;
  const stars = storiesReviews
    .filter((sr) => {
      if (sr.storyId === id) {
        reviewsLength++;
        return sr;
      }
    })
    .map((sr) => sr.stars)
    .reduce((a, b) => a + b, 0);

  return (
    <Card withPadding className={styles.story}>
      <div className={styles.genre}>
        <Badge variant="inverse">{isFree ? "Free" : "Pro"}</Badge>
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
        {shouldShowStarRating && stars > 0 ? (
          <StarRating stars={stars / reviewsLength} />
        ) : (
          <Badge variant="inverse">Not Rated</Badge>
        )}
        {shouldShowTitle && <CardTitle>{name}</CardTitle>}
        <CardDescription>{description}</CardDescription>
        <div className={styles.actions}>
          {shouldShowExploreLink && (
            <StoryViewLink
              href={`/library/${id}`}
              className={styles.actionLink}
            >
              <Button>Explore</Button>
            </StoryViewLink>
          )}
          {shouldShowReadButton && (
            <Link href={`/library/${id}/read`}>
              <Button>Read</Button>
            </Link>
          )}
          {shouldShowDownloadButton && <StoryDownloadButton name={name} />}
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
