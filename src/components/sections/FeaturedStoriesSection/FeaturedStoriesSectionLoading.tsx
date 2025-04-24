import styles from "./FeaturedStoriesSection.module.scss";

import { H1 } from "@/components/ui/Typography";
import { Skeleton } from "@/components/Skeleton";

interface Props {}

const FeaturedStoriesSectionLoading: React.FC<Props> = () => {
  return (
    <div className={styles.stories}>
      <H1 transform="capitalize" className={styles.headline}>
        Featured stories
      </H1>
      <div className={styles.storiesList}>
        <Skeleton type="card" count={6} height="250px" />
      </div>
    </div>
  );
};

export { FeaturedStoriesSectionLoading };
