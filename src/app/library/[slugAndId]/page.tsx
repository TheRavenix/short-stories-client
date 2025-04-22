import styles from "./page.module.scss";

import { Container } from "@/components/ui/Container";
import {
  Story,
  StoryAboutCard,
  StoryPreviewCard,
  StoryReviewHighlighter,
  StoryReviewsCard,
  StoryViewToggle,
} from "@/components/Story";
import { H1 } from "@/components/ui/Typography";
import { SearchParamTabs } from "@/components/SearchParamTabs";
import { TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { Show } from "@/components/Show";

import { getStoryBySlugAndId } from "@/lib/data/story";
import { getStoryReviewsByStoryId } from "@/lib/data/story-review";

interface Props {
  params: Promise<{ slugAndId: string }>;
  searchParams: Promise<{ view: string; tab: string }>;
}

export default async function StoryPage(props: Props) {
  const params = await props.params;
  const storyId = params.slugAndId.split("-").pop();
  const searchParams = await props.searchParams;
  const view = searchParams.view || "grid";
  const tab = searchParams.tab || "about";
  const [storyResponse, storyReviewsResponse] = await Promise.all([
    getStoryBySlugAndId(params.slugAndId),
    getStoryReviewsByStoryId(storyId!),
  ]);

  return (
    <>
      <StoryReviewHighlighter storyReviewsResponse={storyReviewsResponse} />
      <main className={styles.main}>
        <Container withPaddingBlock>
          <H1
            variant="primary"
            transform="capitalize"
            className={styles.headline}
          >
            {storyResponse.data.name}
          </H1>
          <div className={styles.storyContainer}>
            <Story
              {...storyResponse.data}
              shouldShowTitle={false}
              shouldShowExploreLink={false}
              shouldShowReadButton
              shouldShowDownloadButton
              shouldShowStats
            />
            <StoryViewToggle
              id={storyResponse.data._id}
              name={storyResponse.data.name}
              currentView={view}
            />
            <Show
              when={view === "tabs"}
              fallback={
                <>
                  <StoryAboutCard
                    name={storyResponse.data.name}
                    about={storyResponse.data.about}
                  />
                  <StoryPreviewCard
                    id={storyResponse.data._id}
                    name={storyResponse.data.name}
                    preview={storyResponse.data.preview}
                  />
                  <StoryReviewsCard
                    id={storyResponse.data._id}
                    name={storyResponse.data.name}
                    reviews={storyReviewsResponse.data}
                  />
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
                  <StoryAboutCard
                    name={storyResponse.data.name}
                    about={storyResponse.data.about}
                  />
                </TabsContent>
                <TabsContent value="preview">
                  <StoryPreviewCard
                    id={storyResponse.data._id}
                    name={storyResponse.data.name}
                    preview={storyResponse.data.preview}
                  />
                </TabsContent>
                <TabsContent value="reviews">
                  <StoryReviewsCard
                    id={storyResponse.data._id}
                    name={storyResponse.data.name}
                    reviews={storyReviewsResponse.data}
                  />
                </TabsContent>
              </SearchParamTabs>
            </Show>
          </div>
        </Container>
      </main>
    </>
  );
}
