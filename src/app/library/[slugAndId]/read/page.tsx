import { ArrowLeftIcon } from "lucide-react";

import styles from "./page.module.scss";

import { SeparatorHighlighter } from "@/components/SeparatorHighlighter";
import { Button } from "@/components/ui/Button";
import {
  StoryContentType,
  StoryLayout,
  StoryReadTools,
  StoryViewLink,
} from "@/components/Story";
import { CompactContainer } from "@/components/ui/Container";
import { H1 } from "@/components/ui/Typography";
import { Show } from "@/components/Show";
import { EmptyState } from "@/components/EmptyState";

import { getStoryBySlugAndId } from "@/lib/data/story";

interface Props {
  params: Promise<{ slugAndId: string }>;
}

export default async function ReadStory(props: Props) {
  const params = await props.params;
  const story = await getStoryBySlugAndId(params.slugAndId);
  let storyContent: StoryContentType;

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
              {story?.name}
            </H1>
            <Show
              when={
                typeof storyContent !== "undefined" &&
                storyContent?.content.length > 0
              }
              fallback={
                <EmptyState message="A story was supposed to be here... Perhaps the author is still writing?" />
              }
            >
              <StoryReadTools />
              <StoryLayout storyId={story?._id} storyContent={storyContent} />
            </Show>
          </div>
        </CompactContainer>
      </main>
    </>
  );
}
