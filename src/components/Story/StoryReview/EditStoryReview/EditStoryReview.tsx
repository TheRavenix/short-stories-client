'use client'

import { EditStoryReviewDrawer } from './EditStoryReviewDrawer'
import { EditStoryReviewDialog } from './EditStoryReviewDialog'
import { useAuthStore } from '@/stores/auth'
import { useIsMobile } from '@/hooks/media/use-media-utils'

type Props = {
  reviewId: number
  reviewRatingCount: number
  reviewComment: string
}

export function EditStoryReview({
  reviewId,
  reviewRatingCount,
  reviewComment
}: Props) {
  const isMobile = useIsMobile()
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated)

  if (!isAuthenticated) {
    return null
  }

  return isMobile ? (
    <EditStoryReviewDrawer
      reviewId={reviewId}
      reviewRating={reviewRatingCount}
      reviewComment={reviewComment}
    />
  ) : (
    <EditStoryReviewDialog
      reviewId={reviewId}
      reviewRating={reviewRatingCount}
      reviewComment={reviewComment}
    />
  )
}
