import Link from "next/link";
import { BookIcon } from "lucide-react";

import styles from "./FeaturedStoriesSection.module.css";

import { H1 } from "@/components/ui/Typography";
import { EmptyState } from "@/components/EmptyState";
import { Story, StoryType } from "@/components/Story";
import { Button } from "@/components/ui/Button";
import { getStoryReviewsByStoryId } from "@/lib/story/story-review";

type Props = {
  stories: StoryType[]
}

export function FeaturedStoriesSection({ stories }: Props) {
  return (
    <div className={styles.stories}>
      <H1 transform='capitalize' className={styles.headline}>
        Featured stories
      </H1>
      {
        stories.length > 0 ?
          <>
            <div className={styles.storiesList}>
              {stories.map(async (story) => {
                const storyReviews = await getStoryReviewsByStoryId(story.id)
                return (
                  <Story 
                    key={story.id} 
                    story={story} 
                    ratingCount={storyReviews.ratingCount} 
                  />
                )
              })}
            </div>
            <div className={styles.storiesExploreMoreContainer}>
              <Link href='/s' className={styles.exploreLink}>
                <Button size='full'>Explore More</Button>
              </Link>
            </div>
          </> :
          <EmptyState
            icon={<BookIcon />}
            message='No featured stories at the moment. Stay tuned for exciting tales!'
          />
      }
    </div>
  )
}
