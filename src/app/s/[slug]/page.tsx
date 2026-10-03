import styles from "./page.module.scss";

import { Container } from "@/components/ui/Container";
import { Story } from "@/components/Story";
import { H1 } from "@/components/ui/Typography";
import { SearchParamTabs } from "@/components/SearchParamTabs";
import { TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { BackTopButton } from "@/components/buttons";
import { StoryViewToggle } from "@/components/Story/story-view/StoryViewToggle";
import { StoryAboutCard } from "@/components/Story/cards/StoryAboutCard";
import { StoryPreviewCard } from "@/components/Story/cards/StoryPreviewCard";
import { StoryReviewsCard } from "@/components/Story/cards/StoryReviewsCard";
import { getStoryBySlug } from "@/lib/story";
import { getStoryReviewsByStoryId } from "@/lib/story/story-review";

type Props = {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ view: string, tab: string }>
}

export default async function StoryPage(props: Props) {
  const params = await props.params
  const searchParams = await props.searchParams
  const view = searchParams.view || 'grid'
  const tab = searchParams.tab || 'about'
  const story = await getStoryBySlug(params.slug)
  const storyReviews = await getStoryReviewsByStoryId(story.id)

  return (
    <main className={styles.main}>
      <Container withPaddingBlock>
        <H1
          variant='primary'
          transform='capitalize'
          className={styles.headline}
        >
          {story.name}
        </H1>
        <div className={styles.storyContainer}>
          <Story
            story={story}
            ratingCount={storyReviews.ratingCount}
            isTitleShown={false}
            isExploreLinkShown={false}
            isReadButtonShown={true}
            isEditButtonShown={true}
            isDownloadButtonShown={true}
            isDeleteButtonShown={true}
            isStatsShown={true}
          />
          <StoryViewToggle slug={story.slug} currentView={view} />
          {
            view === 'tabs' ?
              <SearchParamTabs defaultValue={tab}>
                <TabsList fullWidth>
                  <TabsTrigger value='about'>About</TabsTrigger>
                  <TabsTrigger value='preview'>Preview</TabsTrigger>
                  <TabsTrigger value='reviews'>Reviews</TabsTrigger>
                </TabsList>

                <TabsContent value='about'>
                  <StoryAboutCard
                    name={story.name}
                    about={story.about}
                  />
                </TabsContent>
                <TabsContent value='preview'>
                  <StoryPreviewCard
                    id={story.id}
                    name={story.name}
                    preview={story.preview}
                  />
                </TabsContent>
                <TabsContent value='reviews'>
                  <StoryReviewsCard
                    id={story.id}
                    name={story.name}
                    reviews={storyReviews.reviews}
                    reviewsDetails={storyReviews.reviewsDetails}
                  />
                </TabsContent>
              </SearchParamTabs> :
              <>
                <StoryAboutCard
                  name={story.name}
                  about={story.about}
                />
               <StoryPreviewCard
                  id={story.id}
                  name={story.name}
                  preview={story.preview}
                />
               <StoryReviewsCard
                  id={story.id}
                  name={story.name}
                  reviews={storyReviews.reviews}
                  reviewsDetails={storyReviews.reviewsDetails}
                />
              </>
          }
        </div>
        <BackTopButton />
      </Container>
    </main>
  )
}
