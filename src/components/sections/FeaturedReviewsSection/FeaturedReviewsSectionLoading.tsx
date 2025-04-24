import styles from "./FeaturedReviewsSection.module.scss";

import { H1 } from "@/components/ui/Typography";
import { Skeleton } from "@/components/Skeleton";

interface Props {}

const FeaturedReviewsSectionLoading: React.FC<Props> = () => {
  return (
    <div className={styles.reviews}>
      <H1 transform="capitalize" className={styles.headline}>
        Featured reviews
      </H1>
      <div className={styles.reviewsList}>
        <Skeleton type="card" count={6} />
      </div>
    </div>
  );
};

export { FeaturedReviewsSectionLoading };
