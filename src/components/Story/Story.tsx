import Link from "next/link";
import Image from "next/image";
import { DownloadIcon, EyeIcon } from "lucide-react";

import styles from "./Story.module.scss";

import { Card, CardDescription, CardTitle } from "../ui/Card";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { StoryDownloadButton } from "./StoryDownloadButton";
import { StarRating } from "../StarRating";
import { Stats } from "../Stats";
import { StoryViewLink } from "./StoryView/StoryViewLink";

import { PlanType } from "../Plans";
import { slugify } from "@/utils/slugify";

interface StoryType {
  _id: string;
  name: string;
  description: string;
  about: string[];
  preview: string[];
  genre: string[];
  coverImage: string;
  views: number;
  downloads: number;
  plan: PlanType;
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
  _id,
  name,
  description,
  genre,
  coverImage,
  views,
  downloads,
  plan,
  shouldShowStarRating = true,
  shouldShowTitle = true,
  shouldShowExploreLink = true,
  shouldShowReadButton = false,
  shouldShowDownloadButton = false,
  shouldShowStats = false,
}) => {
  const reviewsLength = 0;
  const stars = 0;

  return (
    <Card withPadding className={styles.story}>
      <div className={styles.genre}>
        <Badge variant="inverse">{plan}</Badge>
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
              href={`/library/${slugify(name)}-${_id}`}
              className={styles.actionLink}
            >
              <Button>Explore</Button>
            </StoryViewLink>
          )}
          {shouldShowReadButton && (
            <Link href={`/library/${slugify(name)}-${_id}/read`}>
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
