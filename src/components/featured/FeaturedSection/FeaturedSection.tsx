import { FeaturedStoriesSection } from '../FeaturedStoriesSection'
import { FeaturedReviewsSection } from '../FeaturedReviewsSection'
import { findFeaturedStories } from '@/lib/story'
import { findFeaturedReviews } from '@/lib/story/story-review'

export async function FeaturedSection() {
  const featuredStories = await findFeaturedStories()
  const featuredReviews = await findFeaturedReviews()

  return (
    <>
      <FeaturedStoriesSection stories={featuredStories} />
      <FeaturedReviewsSection 
        reviews={featuredReviews.reviews}
        reviewsDetails={featuredReviews.reviewsDetails}
      />
    </>
  )
}
