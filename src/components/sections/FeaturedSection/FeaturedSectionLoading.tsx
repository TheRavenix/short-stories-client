import { FeaturedStoriesSectionLoading } from "../FeaturedStoriesSection";
import { FeaturedReviewsSectionLoading } from "../FeaturedReviewsSection";

interface Props {}

const FeaturedSectionLoading: React.FC<Props> = () => {
  return (
    <>
      <FeaturedStoriesSectionLoading />
      <FeaturedReviewsSectionLoading />
    </>
  );
};

export { FeaturedSectionLoading };
