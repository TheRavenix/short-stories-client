import { FeaturedReviewsSectionLoading } from '../FeaturedReviewsSection/FeaturedReviewsSectionLoading'
import { FeaturedStoriesSectionLoading } from '../FeaturedStoriesSection/FeaturedStoriesSectionLoading'

export function FeaturedSectionLoading() {
  return (
    <>
      <FeaturedStoriesSectionLoading />
      <FeaturedReviewsSectionLoading />
    </>
  )
}
