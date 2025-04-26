import { FeaturedStoriesSection } from "../FeaturedStoriesSection";
import { FeaturedReviewsSection } from "../FeaturedReviewsSection";

import { getFeaturedStories } from "@/lib";

interface Props {}

const FeaturedSection: React.FC<Props> = async () => {
  const featuredStoriesResponse = await getFeaturedStories();
  const { stories, reviews } = featuredStoriesResponse?.data || {};

  return (
    <>
      <FeaturedStoriesSection stories={stories} />
      <FeaturedReviewsSection reviews={reviews} />
    </>
  );
};

export { FeaturedSection };
