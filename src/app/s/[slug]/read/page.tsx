import styles from "./page.module.scss";

import { CompactContainer } from "@/components/ui/Container";
import { H1 } from "@/components/ui/Typography";
import { EmptyState } from "@/components/EmptyState";
import { SeparatorHighlighter } from "@/components/SeparatorHighlighter";
import { BackTopButton } from "@/components/buttons";
import { StoryReadTracker } from "@/components/Story/story-read/StoryReadTracker";
import { ToggleNavbarFixed } from "@/components/Navbar/ToggleNavbarFixed";
import { StoryBackButton } from "@/components/Story/buttons/StoryBackButton";
import { StoryContent } from "@/components/Story/StoryContent";
import { getStoryBySlug } from "@/lib/story";
import { getStoryContentByStoryId } from "@/lib/story/story-content";

type Props = {
  params: Promise<{ slug: string }>
}

export default async function ReadStory(props: Props) {
  const params = await props.params
  const story = await getStoryBySlug(params.slug)
  const storyContent = await getStoryContentByStoryId(story.id)

  return (
    <>
      <SeparatorHighlighter />
      <StoryReadTracker storyId={story.id} />
      <ToggleNavbarFixed />
      <main className={styles.main}>
        <CompactContainer spacing='lg' withPaddingBlock>
          <StoryBackButton storySlug={params.slug} />
          <H1
            variant='primary'
            transform='capitalize'
            className={styles.headline}
          >
            {story.name}
          </H1>
          {
            storyContent.content.length > 0 ?
              <div className={styles.storyContentList}>
                {storyContent.content.map((contentText, index) => (
                  <StoryContent contentText={contentText} index={index} />
                ))}
              </div> :
              <EmptyState message='A story was supposed to be here... Perhaps the author is still writing?' />
          }
          <BackTopButton />
        </CompactContainer>
      </main>
    </>
  );
}
