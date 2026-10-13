import { 
  StoryReviewDetails,
  StoryReviewsRating,
  StoryReviewType 
} from '@/components/Story/StoryReview'

type FindFeaturedReviewsResponse = {
  reviews: StoryReviewType[]
  reviewsDetails: StoryReviewDetails[]
  reviewsRatings: StoryReviewsRating[]
}

export async function findFeaturedReviews(): Promise<FindFeaturedReviewsResponse> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/story-reviews/featured`
  )
  return await response.json()
}

export type FindReviewsByStoryIdResponse = {
  reviews: StoryReviewType[]
  reviewsDetails: StoryReviewDetails[]
  ratingCount: number
}

export async function findReviewsByStoryId(
  storyId: number
): Promise<FindReviewsByStoryIdResponse> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/story-reviews/story/${storyId}`
  )
  return await response.json()
}

type FindStoryReviewByIdResponse = {
  review: StoryReviewType
  details: StoryReviewDetails
}

export async function findStoryReviewById(
  reviewId: string
): Promise<FindStoryReviewByIdResponse> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/story-reviews/${reviewId}`
  )
  return await response.json()
}
