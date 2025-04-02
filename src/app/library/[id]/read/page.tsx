"use client";

import { redirect, useParams } from "next/navigation";
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
import { Callout } from "@/components/Callout";

import { useProfile } from "@/hooks/profile";

import { stories } from "@/utils/stories";
import { storiesContent } from "@/utils/stories-content";

export default function ReadStory() {
  const params = useParams<{ id: string }>();
  const { profile } = useProfile();
  const story = stories.find((s) => s.id === params.id);
  let storyContent: StoryContentType | undefined;

  if (!story) {
    return redirect(`/library/${params.id}`);
  }

  storyContent = storiesContent.find((sc) => sc.storyId === story.id)!;

  return (
    <>
      <SeparatorHighlighter />
      <main className={styles.main}>
        <CompactContainer withPaddingBlock>
          <div className={styles.containerContent}>
            <StoryViewLink
              href={`/library/${story.id}`}
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
              {story.name}
            </H1>
            <Show
              when={
                typeof storyContent !== "undefined" &&
                storyContent.content.length > 0
              }
              fallback={
                <EmptyState message="A story was supposed to be here... Perhaps the author is still writing?" />
              }
            >
              <Show
                when={
                  story.isFree || (!story.isFree && profile?.plan === "pro")
                }
                fallback={
                  <Callout
                    message="This story is for Pro members. Subscribe to unlock and
                      start reading!"
                    href="/plans?plan=pro"
                    buttonText="Upgrade to Pro"
                  />
                }
              >
                <StoryReadTools />
                <StoryLayout storyId={story.id} storyContent={storyContent} />
              </Show>
            </Show>
          </div>
        </CompactContainer>
      </main>
    </>
  );
}
