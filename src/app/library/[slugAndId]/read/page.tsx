import { ArrowLeftIcon } from "lucide-react";

import styles from "./page.module.scss";

import { Button } from "@/components/ui/Button";
import { StoryContent, StoryViewLink } from "@/components/Story";
import { CompactContainer } from "@/components/ui/Container";
import { H1 } from "@/components/ui/Typography";
import { Show } from "@/components/Show";
import { EmptyState } from "@/components/EmptyState";

import { getStoryBySlugAndId } from "@/lib/data/story";
import { getStoryContentByStoryId } from "@/lib/data/story-content";
import { SeparatorHighlighter } from "@/components/SeparatorHighlighter";

interface Props {
  params: Promise<{ slugAndId: string }>;
}

export default async function ReadStory(props: Props) {
  const params = await props.params;
  const storyId = params.slugAndId.split("-").pop();
  const [storyResponse, storyContentResponse] = await Promise.all([
    getStoryBySlugAndId(params.slugAndId),
    getStoryContentByStoryId(storyId!),
  ]);

  return (
    <>
      <SeparatorHighlighter />
      <main className={styles.main}>
        <CompactContainer withPaddingBlock>
          <div className={styles.containerContent}>
            <StoryViewLink
              href={`/library/${params.slugAndId}`}
              className={styles.backToStory}
            >
              <Button variant="ghost" size="icon">
                <ArrowLeftIcon />
              </Button>
            </StoryViewLink>
            <H1
              variant="primary"
              transform="capitalize"
              className={styles.headline}
            >
              {storyResponse.data.name}
            </H1>
            <Show
              when={
                storyContentResponse.success &&
                storyContentResponse.data.content.length > 0
              }
              fallback={
                <EmptyState message="A story was supposed to be here... Perhaps the author is still writing?" />
              }
            >
              <StoryContent {...storyContentResponse.data} />
            </Show>
          </div>
        </CompactContainer>
      </main>
    </>
  );
}
