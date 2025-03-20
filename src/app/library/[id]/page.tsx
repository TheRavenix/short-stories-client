import { redirect } from "next/navigation";
import { PageProps } from "../../../../.next/types/app/page";

import styles from "./page.module.scss";

import { Container } from "@/components/ui/Container";
import { Story, StoryContent } from "@/components/Story";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { H1, P, Span } from "@/components/ui/Typography";
import { StarRating } from "@/components/StarRating";
import { Separator } from "@/components/ui/Separator";
import { Badge } from "@/components/ui/Badge";

import { stories } from "@/utils/stories";
import { Stats } from "@/components/Stats";
import { MessageCircleIcon } from "lucide-react";

export default async function StoryPage(props: PageProps) {
  const params = await props.params;
  const story = stories.find((s) => s.id === params.id);

  if (!story) {
    return redirect("/library");
  }

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
              <StoryContent storyId={story.id} content={story.preview} />
            </CardContent>
          </Card>
          <Card>
            <CardHeader className={styles.reviewsHeader}>
              <CardTitle size="xl">{story.name}'s reviews</CardTitle>
              <Stats
                list={[
                  {
                    icon: <MessageCircleIcon size={16} />,
                    value: story.reviews.length,
                  },
                ]}
              />
            </CardHeader>
            <CardContent className={styles.reviewsContent}>
              {story.reviews.map((review) => (
                <div key={review.id} className={styles.review}>
                  <Span size="lg" weight="bold">
                    {review.userName}
                  </Span>
                  <StarRating stars={review.stars} />
                  <P>{review.comment}</P>
                  <Separator />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </Container>
    </main>
  );
}
