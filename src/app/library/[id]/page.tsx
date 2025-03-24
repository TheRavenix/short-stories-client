import styles from "./page.module.scss";

import { Container } from "@/components/ui/Container";
import {
  Story,
  StoryAboutCard,
  StoryPreviewCard,
  StoryReviewsCard,
  StoryReviewType,
  StoryViewToggle,
} from "@/components/Story";
import { H1 } from "@/components/ui/Typography";
import { SearchParamTabs } from "@/components/SearchParamTabs";
import { TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { Show } from "@/components/Show";

import { stories } from "@/utils/stories";
import { storiesReviews } from "@/utils/stories-reviews";
import { Callout } from "@/components/Callout";

interface Props {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ view: string; tab: string }>;
}

export default async function StoryPage(props: Props) {
  const params = await props.params;
  const searchParams = await props.searchParams;
  const view = searchParams.view || "grid";
  const tab = searchParams.tab || "about";
  const story = stories.find((s) => s.id === params.id);
  let reviews: StoryReviewType[];

  if (!story) {
    return (
      <main className={styles.noStoryMain}>
        <Container withPaddingBlock>
          <Callout
            message="This story hasn’t been written yet… or maybe it got lost!"
            href="/library"
            buttonText="Back to Library"
          />
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
            shouldShowReadButton
            shouldShowDownloadButton
            shouldShowStats
          />
          <StoryViewToggle id={story.id} currentView={view} />
          <Show
            when={view === "tabs"}
            fallback={
              <>
                <StoryAboutCard name={story.name} about={story.about} />
                <StoryPreviewCard
                  id={story.id}
                  name={story.name}
                  preview={story.preview}
                />
                <StoryReviewsCard name={story.name} reviews={reviews} />
              </>
            }
          >
            <SearchParamTabs defaultValue={tab}>
              <TabsList fullWidth>
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="about">
                <StoryAboutCard name={story.name} about={story.about} />
              </TabsContent>
              <TabsContent value="preview">
                <StoryPreviewCard
                  id={story.id}
                  name={story.name}
                  preview={story.preview}
                />
              </TabsContent>
              <TabsContent value="reviews">
                <StoryReviewsCard name={story.name} reviews={reviews} />
              </TabsContent>
            </SearchParamTabs>
          </Show>
        </div>
      </Container>
    </main>
  );
}
