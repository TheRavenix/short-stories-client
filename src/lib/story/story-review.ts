import { StoryReviewDetails, StoryReviewsRating, StoryReviewType } from '@/components/Story/StoryReview'

type GetFeaturedReviewsResponse = {
  reviews: StoryReviewType[]
  reviewsDetails: StoryReviewDetails[]
  reviewsRatings: StoryReviewsRating[]
}

export async function getFeaturedReviews(): Promise<GetFeaturedReviewsResponse> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/story-reviews/featured`
  )
  return await response.json()
}

export type GetReviewsByStoryIdResponse = {
  reviews: StoryReviewType[]
  reviewsDetails: StoryReviewDetails[]
  ratingCount: number
}

export async function getStoryReviewsByStoryId(
  storyId: number
): Promise<GetReviewsByStoryIdResponse> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/story-reviews/story/${storyId}`
  )
  return await response.json()
}

type GetStoryReviewByIdResponse = {
  review: StoryReviewType
  details: StoryReviewDetails
}

export async function getStoryReviewById(
  reviewId: string
): Promise<GetStoryReviewByIdResponse> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/story-reviews/${reviewId}`
  )
  return await response.json()
}
