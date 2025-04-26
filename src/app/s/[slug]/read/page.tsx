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

import { getStoryBySlug, getStoryContentByStoryId } from "@/lib";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ReadStory(props: Props) {
  const params = await props.params;
  const storyResponse = await getStoryBySlug(params.slug);
  const storyContentResponse = await getStoryContentByStoryId(
    storyResponse?.data._id
  );

  return (
    <>
      <SeparatorHighlighter />
      <StoryReadTracker storyId={storyResponse?.data._id} />
      <ToggleNavbarFixed />
      <main className={styles.main}>
        <CompactContainer withPaddingBlock>
          <div className={styles.containerContent}>
            <StoryViewLink
              href={`/s/${params.slug}`}
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
