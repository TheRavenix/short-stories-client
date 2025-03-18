import { redirect } from "next/navigation";
import { PageProps } from "../../../../.next/types/app/page";

import styles from "./page.module.scss";

import { Container } from "@/components/ui/Container";
import { Story } from "@/components/Story";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/Card";
import { H1, P, Span } from "@/components/ui/Typography";

import { stories } from "@/utils/stories";
import { StarRating } from "@/components/StarRating";
import { Separator } from "@/components/ui/Separator";
import { Badge } from "@/components/ui/Badge";

export default async function StoryPage(props: PageProps) {
  const params = await props.params;
  const story = stories.find((s) => s.id === params.id);

  if (!story) {
    redirect("/library");
    return null;
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
            shouldShowDownloadButton={true}
            shouldShowStats={true}
          />
          <Card>
            <CardContent className={styles.previewCardContent}>
              <CardTitle size="xl">{story.name}'s preview</CardTitle>
              <CardDescription size="lg">{story.preview}</CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardContent className={styles.reviewsCardContent}>
              <div className={styles.reviewsCardContentHeader}>
                <CardTitle size="xl">{story.name}'s reviews</CardTitle>
                <Badge size="sm" vaiant="inverse">
                  {story.reviews.length}
                </Badge>
              </div>
              <div className={styles.reviews}>
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
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </main>
  );
}
