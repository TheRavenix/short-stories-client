import { redirect } from "next/navigation";
import { PageProps } from "../../../../.next/types/app/page";
import {
  CircleAlertIcon,
  EyeIcon,
  InfoIcon,
  MessageCircleIcon,
} from "lucide-react";
import Link from "next/link";

import styles from "./page.module.scss";

import { Container } from "@/components/ui/Container";
import {
  Story,
  StoryContent,
  StoryReview,
  StoryReviewType,
} from "@/components/Story";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { H1 } from "@/components/ui/Typography";
import { Stats } from "@/components/Stats";

import { Show } from "@/components/Show";
import { EmptyState } from "@/components/EmptyState";
import { Button } from "@/components/ui/Button";

import { stories } from "@/utils/stories";
import { storiesReviews } from "@/utils/stories-reviews";

export default async function StoryPage(props: PageProps) {
  const params = await props.params;
  const story = stories.find((s) => s.id === params.id);
  let reviews: StoryReviewType[];

  if (!story) {
    return (
      <main className={styles.noStoryMain}>
        <Container withPaddingBlock>
          <div className={styles.noStoryContent}>
            <EmptyState
              icon={<CircleAlertIcon />}
              message="This story hasn’t been written yet… or maybe it got lost!"
            />
            <Link href="/library">
              <Button>Back to Library</Button>
            </Link>
          </div>
        </Container>
      </main>
    );
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
              <CardTitle size="xl">{story.name}'s about</CardTitle>
            </CardHeader>
            <CardContent>
              <Show
                when={story.about.length > 0}
                fallback={
                  <EmptyState
                    icon={<InfoIcon />}
                    message="The author hasn't shared more details yet, but the story awaits!"
                  />
                }
              >
                <div className={styles.aboutDescriptions}>
                  {story.about.map((item, i) => (
                    <CardDescription key={i}>{item}</CardDescription>
                  ))}
                </div>
              </Show>
            </CardContent>
          </Card>
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
                    message="No preview available. Start reading to explore the story!"
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
                    message="No reviews yet. Be the first to share your thoughts!"
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
