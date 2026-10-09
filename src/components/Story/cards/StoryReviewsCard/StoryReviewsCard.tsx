'use client'

import { MessageCircleIcon } from 'lucide-react'

import styles from './StoryReviewsCard.module.css'

import { EmptyState } from '@/components/EmptyState'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import { P } from '@/components/ui/Typography'
import { Stats } from '@/components/Stats'
import { StoryReviewDetails, StoryReviewType } from '../../StoryReview'
import { StoryReview } from '../../StoryReview'
import { Skeleton } from '@/components/Skeleton'
import { CreateStoryReview } from '../../StoryReview/CreateStoryReview'
import { useProfile } from '@/hooks/profile'

type Props = {
  id: number
  name: string
  reviews: StoryReviewType[]
  reviewsDetails: StoryReviewDetails[]
}

export function StoryReviewsCard({ id, name, reviews, reviewsDetails }: Props) {
  const { profile, isLoading } = useProfile()
  const userReview = reviews?.find((review) => review.userId === profile?.id)
  const userReviewDetails = reviewsDetails?.find((details) => details.storyReviewId === userReview?.id)

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <P
            size='xl'
            weight='semi-bold'
            transform='capitalize'
            className={styles.uiFont}
          >
            {name}'s reviews
          </P>
        </CardHeader>
        <CardContent>
          <Skeleton type='card' height='125px' />
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader className={styles.reviewsCardHeader}>
        <P
          size='xl'
          weight='semi-bold'
          transform='capitalize'
          className={styles.uiFont}
        >
          {name}'s reviews
        </P>
        {reviews.length > 0 && (
          <Stats
            list={[
              {
                icon: <MessageCircleIcon size={16} />,
                value: reviews.length,
              }
            ]}
          />
        )}
      </CardHeader>
      <CardContent className={styles.reviewsCardContent}>
        {userReview === undefined && <CreateStoryReview storyId={id} />}
        {
          reviews.length > 0 ?
            <div className={styles.reviewsCardList}>
              {userReview !== undefined && userReviewDetails !== undefined && (
                <StoryReview
                  review={userReview}
                  reviewDetails={userReviewDetails}
                  isEditButtonShown={true}
                  isDeleteButtonShown={true}
                  isUserNameHighlighted={true}
                />
              )}
              {reviews.filter((r) => r.userId !== profile?.id).map((review) => {
                const reviewDetails = reviewsDetails?.find((details) => details.storyReviewId === review.id)

                if (reviewDetails === undefined) {
                  return null
                }

                return (
                  <StoryReview
                    key={review.id}
                    review={review}
                    reviewDetails={reviewDetails}
                    isDeleteButtonShown={profile?.role === 'admin'}
                  />
                )
              })}
            </div> :
            <EmptyState
              icon={<MessageCircleIcon />}
              message='No reviews yet. Be the first to share your thoughts!'
            />
        }
      </CardContent>
    </Card>
  )
}
