import { ArrowLeftIcon } from "lucide-react";

import styles from "./page.module.scss";

import { Button } from "@/components/ui/Button";
import {
  StoryContent,
  StoryReadTracker,
  StoryViewLink,
} from "@/components/Story";
import { CompactContainer } from "@/components/ui/Container";
import { H1 } from "@/components/ui/Typography";
import { Show } from "@/components/Show";
import { EmptyState } from "@/components/EmptyState";
import { SeparatorHighlighter } from "@/components/SeparatorHighlighter";
import { ToggleNavbarFixed } from "@/components/Navbar";
import { BackTopButton } from "@/components/buttons";

import { getStoryBySlugAndId, getStoryContentByStoryId } from "@/lib";

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
      <StoryReadTracker storyId={storyId!} />
      <ToggleNavbarFixed />
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
            <BackTopButton />
          </div>
        </CompactContainer>
      </main>
    </>
  );
}
