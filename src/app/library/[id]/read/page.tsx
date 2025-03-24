import { redirect } from "next/navigation";
import { PageProps } from "../../../../../.next/types/app/page";
import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";

import styles from "./page.module.scss";

import { Card, CardContent } from "@/components/ui/Card";
import { SeparatorHighlighter } from "@/components/SeparatorHighlighter";
import { Button } from "@/components/ui/Button";
import { StoryContent, StoryContentType } from "@/components/Story";
import { CompactContainer } from "@/components/ui/Container";
import { H1, P } from "@/components/ui/Typography";
import { Show } from "@/components/Show";
import { EmptyState } from "@/components/EmptyState";

import { stories } from "@/utils/stories";
import { storiesContent } from "@/utils/stories-content";

const isProUser = false;

export default async function ReadStory(props: PageProps) {
  const params = await props.params;
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
            <Link href={`/library/${story.id}`} className={styles.backToStory}>
              <Button variant="ghost" size="icon">
                <ArrowLeftIcon />
              </Button>
            </Link>
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
                  (story.isFree && !isProUser) || (!story.isFree && isProUser)
                }
                fallback={
                  <div className={styles.proStoryContainer}>
                    <P size="xl">
                      This story is for Pro members. Subscribe to unlock and
                      start reading!
                    </P>
                    <Link href="/plans">
                      <Button>Upgrade to Pro</Button>
                    </Link>
                  </div>
                }
              >
                <Card>
                  <CardContent>
                    <StoryContent {...storyContent} />
                  </CardContent>
                </Card>
              </Show>
            </Show>
          </div>
        </CompactContainer>
      </main>
    </>
  );
}
