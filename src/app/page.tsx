import Link from "next/link";
import { BookIcon, MessageCircleIcon } from "lucide-react";

import styles from "./page.module.scss";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HeroCanvas } from "@/components/HeroCanvas";
import { Story, StoryReview, StoryType } from "@/components/Story";
import { H1, P } from "@/components/ui/Typography";
import { CompactContainer } from "@/components/ui/Container";
import { NewsletterSubForm } from "@/components/NewsletterSubForm";
import { Card, CardContent } from "@/components/ui/Card";
import { EmptyState } from "@/components/EmptyState";
import { Show } from "@/components/Show";
import { HomeSignUp } from "@/components/HomeSignUp";

export default function Home() {
  const stories: StoryType[] = [];

  return (
    <main>
      <Container withPaddingBlock withContentSpacing>
        <div className={styles.hero}>
          <HeroCanvas />
          <div className={styles.heroContent}>
            <H1 transform="capitalize" variant="primary">
              Discover amazing short stories
            </H1>
            <P>Read, imagine, and escape into worlds beyond your own.</P>
            <Link href="/library">
              <Button>Explore Stories</Button>
            </Link>
          </div>
        </div>
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
              <Link href="/library">
                <Button>Explore More</Button>
              </Link>
            </div>
          </Show>
        </div>
        <div className={styles.reviews}>
          <H1 transform="capitalize" className={styles.headline}>
            Featured reviews
          </H1>
          <Show
            when={stories.length > 0}
            fallback={
              <EmptyState
                icon={<MessageCircleIcon />}
                message="No reviews available yet. Be the first to share your thoughts!"
              />
            }
          >
            <div className={styles.reviewsList}>
              {stories.map((story) => {
                return (
                  <Card key={story._id}>
                    <CardContent className={styles.reviewsCardContent}>
                      <StoryReview
                        _id=""
                        comment=""
                        stars={0}
                        storyId=""
                        storyName=""
                        userId=""
                        userName=""
                        shouldShowSeparator={false}
                        shouldShowStoryNameBadge
                        shouldShowReadMoreLink
                      />
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </Show>
        </div>
      </Container>
      <CompactContainer withPaddingBlock withContentSpacing>
        <HomeSignUp />
        <div className={styles.newsletterSub}>
          <H1 transform="capitalize" className={styles.headline}>
            Stay updated
          </H1>
          <NewsletterSubForm />
        </div>
      </CompactContainer>
    </main>
  );
}
