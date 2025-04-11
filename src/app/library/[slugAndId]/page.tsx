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
import { Callout } from "@/components/Callout";

import { getStoryBySlugAndId } from "@/lib/data/story";

interface Props {
  params: Promise<{ slugAndId: string }>;
  searchParams: Promise<{ view: string; tab: string }>;
}

export default async function StoryPage(props: Props) {
  const params = await props.params;
  const searchParams = await props.searchParams;
  const view = searchParams.view || "grid";
  const tab = searchParams.tab || "about";
  const story = await getStoryBySlugAndId(params.slugAndId);
  const reviews: StoryReviewType[] = [];

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
          <StoryViewToggle
            id={story._id}
            name={story.name}
            currentView={view}
          />
          <Show
            when={view === "tabs"}
            fallback={
              <>
                <StoryAboutCard name={story.name} about={story.about} />
                <StoryPreviewCard
                  id={story._id}
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
                  id={story._id}
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
