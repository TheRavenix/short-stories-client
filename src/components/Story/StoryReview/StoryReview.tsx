import Link from 'next/link'
import clsx from 'clsx'
import dayjs from 'dayjs'

import styles from './StoryReview.module.css'

import { StarRating } from '../../StarRating'
import { Separator } from '../../ui/Separator'
import { P, Span } from '../../ui/Typography'
import { Button } from '../../ui/Button'
import { Badge } from '../../ui/Badge'
import { DeleteStoryReview } from './DeleteStoryReview'
import { EditStoryReview } from './EditStoryReview'

export type StoryReviewType = {
  id: number
  userId: number
  storyId: number
  stars: number
  comment: string
}

export type StoryReviewDetails = {
  storyReviewId: number
  storySlug: string
  userName: string
  storyName: string
}

export type StoryReviewsRating = {
  storyId: number
  ratingCount: number
}

type StoryReviewProps = {
  className?: string
  isStoryNameBadgeShown?: boolean
  isReadMoreLinkShown?: boolean
  isSeparatorShown?: boolean
  isEditButtonShown?: boolean
  isDeleteButtonShown?: boolean
  isUserNameHighlighted?: boolean
  review: StoryReviewType
  reviewDetails: StoryReviewDetails
}

// Add createdAt and updatedAt to db entity
export function StoryReview({
  review,
  reviewDetails,
  className,
  isStoryNameBadgeShown = false,
  isReadMoreLinkShown = false,
  isSeparatorShown = true,
  isEditButtonShown = false,
  isDeleteButtonShown = false,
  isUserNameHighlighted = false
}: StoryReviewProps) {
  return (
    <div className={clsx(styles.review, className)}>
      <div className={styles.reviewHeader}>
        <div>
          <Span
            size='lg'
            weight='bold'
            variant={isUserNameHighlighted ? 'primary' : 'foreground'}
          >
            {reviewDetails.userName || 'DELETED USER'}
          </Span>
          <P size='sm'>
            {dayjs(new Date()).format('DD/MM/YYYY')}
            {new Date(new Date()).getTime() !== new Date(new Date()).getTime() &&
              ' (edited)'}
          </P>
        </div>
        <div className={styles.reviewHeaderEndContent}>
          {isEditButtonShown && (
            <EditStoryReview
              reviewId={review.id}
              reviewRatingCount={review.stars}
              reviewComment={review.comment}
            />
          )}
          {isDeleteButtonShown && <DeleteStoryReview reviewId={review.id} />}
          {isStoryNameBadgeShown && <Badge>{reviewDetails.userName}</Badge>}
        </div>
      </div>
      <StarRating rating={review.stars} />
      <P>{review.comment}</P>
      {isReadMoreLinkShown && (
        <Link
          href={`/s/${reviewDetails.storySlug}?view=tabs&tab=reviews`}
          className={styles.reviewLink}
        >
          <Button size='sm' variant='inverse'>
            Read more
          </Button>
        </Link>
      )}
      {isSeparatorShown && <Separator />}
    </div>
  )
}
