import Link from 'next/link'
import Image from 'next/image'
import { DownloadIcon, EyeIcon } from 'lucide-react'
import clsx from 'clsx'

import styles from './Story.module.css'

import { Card, CardDescription, CardTitle } from '../ui/Card'
import { Button } from '../ui/Button'
import { Badge } from '../ui/Badge'
import { StoryDownloadButton } from './buttons/StoryDownloadButton'
import { StoryEditButton } from './buttons/StoryEditButton'
import { StarRating } from '../StarRating'
import { Stats } from '../Stats'
import { StoryViewLink } from './story-view/StoryViewLink'
import { PlanType } from '../Plans'
import { DeleteStory } from './DeleteStory'

export type StoryType = {
  id: number
  name: string
  slug: string
  description: string
  content: string[]
  about: string[]
  preview: string[]
  genre: string[]
  coverImage: string
  views: number
  downloads: number
  plan: PlanType
  featured: boolean
}

type Props = {
  className?: string
  story: StoryType
  ratingCount: number
  isStarRatingShown?: boolean
  isTitleShown?: boolean
  isExploreLinkShown?: boolean
  isReadButtonShown?: boolean
  isEditButtonShown?: boolean
  isDownloadButtonShown?: boolean
  isDeleteButtonShown?: boolean
  isStatsShown?: boolean
}

export function Story({
  className,
  story,
  ratingCount,
  isStarRatingShown = true,
  isTitleShown = true,
  isExploreLinkShown = true,
  isReadButtonShown = false,
  isEditButtonShown = false,
  isDownloadButtonShown = false,
  isDeleteButtonShown = false,
  isStatsShown = false
}: Props) {
  return (
    <Card withPadding className={clsx(styles.story, className)}>
      <div className={styles.badges}>
        <Badge variant='inverse'>{story.plan}</Badge>
        {story.genre.map((item) => (
          <Badge key={item}>{item}</Badge>
        ))}
      </div>
      <Image
        className={styles.coverImage}
        src='/short-story-cover.jpeg'
        alt={`${story.name} Cover`}
        width={178.5}
        height={200}
      />
      <div className={styles.content}>
        {isStarRatingShown && ratingCount > 0 ? (
          <StarRating rating={ratingCount} />
        ) : (
          <Badge variant='inverse'>Not Rated</Badge>
        )}
        {isTitleShown && <CardTitle>{story.name}</CardTitle>}
        <CardDescription>{story.description}</CardDescription>
        <div className={styles.actions}>
          {isExploreLinkShown && (
            <StoryViewLink href={`/s/${story.slug}`} className={styles.actionLink}>
              <Button>Explore</Button>
            </StoryViewLink>
          )}
          {isReadButtonShown && (
            <Link href={`/s/${story.slug}/read`}>
              <Button>Read</Button>
            </Link>
          )}
          {isEditButtonShown && <StoryEditButton storySlug={story.slug} />}
          {isDownloadButtonShown && (
            <StoryDownloadButton storyId={story.id} storyName={story.name} />
          )}
          {isDeleteButtonShown && (
            <DeleteStory storyId={story.id} storyName={story.name} />
          )}
        </div>
      </div>
      {isStatsShown && (
        <div className={styles.statsWrapper}>
          <Stats
            list={[
              {
                icon: <EyeIcon size={16} />,
                value: story.views
              },
              {
                icon: <DownloadIcon size={16} />,
                value: story.downloads
              }
            ]}
          />
        </div>
      )}
    </Card>
  )
}
