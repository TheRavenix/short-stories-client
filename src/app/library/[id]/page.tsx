import { redirect } from "next/navigation";
import { PageProps } from "../../../../.next/types/app/page";
import { EyeIcon, MessageCircleIcon } from "lucide-react";

import styles from "./page.module.scss";

import { Container } from "@/components/ui/Container";
import {
  Story,
  StoryContent,
  StoryReview,
  StoryReviewType,
} from "@/components/Story";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { H1 } from "@/components/ui/Typography";
import { Stats } from "@/components/Stats";

import { stories } from "@/utils/stories";
import { storiesReviews } from "@/utils/stories-reviews";
import { Show } from "@/components/Show";
import { EmptyState } from "@/components/EmptyState";

export default async function StoryPage(props: PageProps) {
  const params = await props.params;
  const story = stories.find((s) => s.id === params.id);
  let reviews: StoryReviewType[];

  if (!story) {
    return redirect("/library");
  }

  reviews = storiesReviews.filter((sr) => sr.storyId === story.id);

  return (
    <main className={styles.main}>
      <Container withPaddingBlock>
        <H1
          variant="primary"
          transform="capitalize"
          className={styles.headline}
        >
          {story.name}
        </H1>
        <div className={styles.storyContainer}>
          <Story
            {...story}
            shouldShowTitle={false}
            shouldShowExploreLink={false}
            shouldShowReadButton={true}
            shouldShowDownloadButton={true}
            shouldShowStats={true}
          />
          <Card>
            <CardHeader>
              <CardTitle size="xl">{story.name}'s preview</CardTitle>
            </CardHeader>
            <CardContent>
              <Show
                when={story.preview.length > 0}
                fallback={
                  <EmptyState
                    icon={<EyeIcon />}
                    message="No preview to show."
                  />
                }
              >
                <StoryContent storyId={story.id} content={story.preview} />
              </Show>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className={styles.reviewsHeader}>
              <CardTitle size="xl">{story.name}'s reviews</CardTitle>
              {reviews.length > 0 && (
                <Stats
                  list={[
                    {
                      icon: <MessageCircleIcon size={16} />,
                      value: reviews.length,
                    },
                  ]}
                />
              )}
            </CardHeader>
            <CardContent className={styles.reviewsContent}>
              <Show
                when={reviews.length > 0}
                fallback={
                  <EmptyState
                    icon={<MessageCircleIcon />}
                    message="No reviews to show."
                  />
                }
              >
                {reviews.map((review) => (
                  <StoryReview key={review.id} {...review} />
                ))}
              </Show>
            </CardContent>
          </Card>
        </div>
      </Container>
    </main>
  );
}
