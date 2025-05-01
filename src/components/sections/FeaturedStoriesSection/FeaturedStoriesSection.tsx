import Link from "next/link";
import { BookIcon } from "lucide-react";

import styles from "./FeaturedStoriesSection.module.scss";

import { H1 } from "@/components/ui/Typography";
import { Show } from "@/components/Show";
import { EmptyState } from "@/components/EmptyState";
import { Story, StoryType } from "@/components/Story";
import { Button } from "@/components/ui/Button";

interface Props {
  stories: StoryType[];
}

const FeaturedStoriesSection: React.FC<Props> = ({ stories }) => {
  return (
    <div className={styles.stories}>
      <H1 transform="capitalize" className={styles.headline}>
        Featured stories
      </H1>
      <Show
        when={stories.length > 0}
        fallback={
          <EmptyState
            icon={<BookIcon />}
            message="No featured stories at the moment. Stay tuned for exciting tales!"
          />
        }
      >
        <div className={styles.storiesList}>
          {stories.map((story) => (
            <Story key={story._id} {...story} />
          ))}
        </div>
        <div className={styles.storiesExploreMoreContainer}>
          <Link href="/s" className={styles.exploreLink}>
            <Button size="full">Explore More</Button>
          </Link>
        </div>
      </Show>
    </div>
  );
};

export { FeaturedStoriesSection };
