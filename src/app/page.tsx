import Link from "next/link";

import styles from "./page.module.scss";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HeroCanvas } from "@/components/HeroCanvas";
import { Story, StoryReview } from "@/components/Story";
import { H1, P } from "@/components/ui/Typography";

import { stories } from "@/utils/stories";
import { SignUpForm } from "@/components/SignUpForm";
import { CompactContainer } from "@/components/ui/Container";
import { NewsletterSubForm } from "@/components/NewsletterSubForm";
import { Card, CardContent } from "@/components/ui/Card";
import { storiesReviews } from "@/utils/stories-reviews";
import { EmptyState } from "@/components/EmptyState";
import { BookIcon, MessageCircleIcon } from "lucide-react";
import { Show } from "@/components/Show";

export default function Home() {
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
                <Story key={story.id} {...story} />
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
                const review = storiesReviews.find(
                  (sr) => sr.storyId === story.id
                );

                if (!review) return null;

                return (
                  <Card key={story.id}>
                    <CardContent className={styles.reviewsCardContent}>
                      <StoryReview
                        {...review}
                        shouldShowSeparator={false}
                        shouldShowStoryNameBadge={true}
                        shouldShowReadMoreLink={true}
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
        <div className={styles.signUp}>
          <H1 transform="capitalize" className={styles.headline}>
            Sign up
          </H1>
          <SignUpForm />
        </div>
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
