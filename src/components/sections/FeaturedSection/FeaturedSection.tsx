import { FeaturedStoriesSection } from "../FeaturedStoriesSection";
import { FeaturedReviewsSection } from "../FeaturedReviewsSection";
import { getFeaturedStories } from "@/lib/story";
import { getFeaturedReviews } from "@/lib/story/story-review";

export async function FeaturedSection() {
  const featuredStories = await getFeaturedStories()
  const featuredReviews = await getFeaturedReviews()

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
