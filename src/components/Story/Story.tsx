import Link from "next/link";
import Image from "next/image";
import { DownloadIcon, EyeIcon } from "lucide-react";
import clsx from "clsx";

import styles from "./Story.module.scss";

import { Card, CardDescription, CardTitle } from "../ui/Card";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import {
  StoryDeleteButton,
  StoryDownloadButton,
  StoryUpdateButton,
} from "./buttons";
import { StarRating } from "../StarRating";
import { Stats } from "../Stats";
import { StoryViewLink } from "./story-view/StoryViewLink";

import { PlanType } from "../Plans";

interface StoryType {
  _id: string;
  name: string;
  slug: string;
  description: string;
  about: string[];
  preview: string[];
  genre: string[];
  coverImage: string;
  views: number;
  downloads: number;
  plan: PlanType;
  rating: number;
  createdAt: Date;
  updatedAt: Date;
}

interface Props extends StoryType {
  className?: string;
  shouldShowStarRating?: boolean;
  shouldShowTitle?: boolean;
  shouldShowExploreLink?: boolean;
  shouldShowReadButton?: boolean;
  shouldShowUpdateButton?: boolean;
  shouldShowDownloadButton?: boolean;
  shouldShowDeleteButton?: boolean;
  shouldShowStats?: boolean;
}

const Story: React.FC<Props> = ({
  _id,
  name,
  slug,
  description,
  genre,
  coverImage,
  views,
  downloads,
  rating,
  className,
  shouldShowStarRating = true,
  shouldShowTitle = true,
  shouldShowExploreLink = true,
  shouldShowReadButton = false,
  shouldShowUpdateButton = false,
  shouldShowDownloadButton = false,
  shouldShowDeleteButton = false,
  shouldShowStats = false,
}) => {
  return (
    <Card withPadding className={clsx(styles.story, className)}>
      <div className={styles.genre}>
        {genre.map((item) => (
          <Badge key={item}>{item}</Badge>
        ))}
      </div>
      <Image
        className={styles.coverImage}
        src={`${process.env.NEXT_PUBLIC_SERVER_URL}/images/${coverImage}`}
        alt={`${name} Cover`}
        width={178.5}
        height={200}
      />
      <div className={styles.content}>
        {shouldShowStarRating && rating > 0 ? (
          <StarRating stars={rating} />
        ) : (
          <Badge variant="inverse">Not Rated</Badge>
        )}
        {shouldShowTitle && <CardTitle>{name}</CardTitle>}
        <CardDescription>{description}</CardDescription>
        <div className={styles.actions}>
          {shouldShowExploreLink && (
            <StoryViewLink href={`/s/${slug}`} className={styles.actionLink}>
              <Button>Explore</Button>
            </StoryViewLink>
          )}
          {shouldShowReadButton && (
            <Link href={`/s/${slug}/read`}>
              <Button>Read</Button>
            </Link>
          )}
          {shouldShowUpdateButton && <StoryUpdateButton storySlug={slug} />}
          {shouldShowDownloadButton && (
            <StoryDownloadButton storyId={_id} storyName={name} />
          )}
          {shouldShowDeleteButton && <StoryDeleteButton storyId={_id} />}
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
