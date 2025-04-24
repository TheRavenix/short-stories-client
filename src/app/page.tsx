import Link from "next/link";
import { BookIcon, MessageCircleIcon } from "lucide-react";

import styles from "./page.module.scss";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HeroCanvas } from "@/components/HeroCanvas";
import { Story, StoryReview } from "@/components/Story";
import { H1, P } from "@/components/ui/Typography";
import { CompactContainer } from "@/components/ui/Container";
import { NewsletterSubForm } from "@/components/forms";
import { Card, CardContent } from "@/components/ui/Card";
import { EmptyState } from "@/components/EmptyState";
import { Show } from "@/components/Show";
import { HomeSignUp } from "@/components/HomeSignUp";

import { getFeaturedStories } from "@/lib/data/story";
import { Suspense } from "react";
import { Skeleton } from "@/components/Skeleton";

export const dynamic = "force-dynamic";

async function FeaturedStoriesAndReviews() {
  const featuredStoriesResponse = await getFeaturedStories();

  return (
    <>
      <div className={styles.stories}>
        <H1 transform="capitalize" className={styles.headline}>
          Featured stories
        </H1>
        <Show
          when={featuredStoriesResponse?.data.stories.length > 0}
          fallback={
            <EmptyState
              icon={<BookIcon />}
              message="No featured stories at the moment. Stay tuned for exciting tales!"
            />
          }
        >
          <div className={styles.storiesList}>
            {featuredStoriesResponse?.data.stories.map((story) => (
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
          when={featuredStoriesResponse?.data.reviews.length > 0}
          fallback={
            <EmptyState
              icon={<MessageCircleIcon />}
              message="No reviews available yet. Be the first to share your thoughts!"
            />
          }
        >
          <div className={styles.reviewsList}>
            {featuredStoriesResponse?.data.reviews.map((review) => {
              return (
                <Card key={review._id}>
                  <CardContent className={styles.reviewsCardContent}>
                    <StoryReview
                      {...review}
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
    </>
  );
}

export default async function Home() {
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
        <Suspense
          fallback={
            <>
              <div className={styles.stories}>
                <H1 transform="capitalize" className={styles.headline}>
                  Featured stories
                </H1>
                <div className={styles.storiesList}>
                  <Skeleton type="card" count={6} height="250px" />
                </div>
              </div>
              <div className={styles.reviews}>
                <H1 transform="capitalize" className={styles.headline}>
                  Featured reviews
                </H1>
                <div className={styles.reviewsList}>
                  <Skeleton type="card" count={6} />
                </div>
              </div>
            </>
          }
        >
          <FeaturedStoriesAndReviews />
        </Suspense>
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
