import { redirect } from "next/navigation";
import { ArrowLeftIcon } from "lucide-react";

import styles from "./page.module.scss";

import { Card, CardContent } from "@/components/ui/Card";
import { SeparatorHighlighter } from "@/components/SeparatorHighlighter";
import { Button } from "@/components/ui/Button";
import {
  StoryContent,
  StoryContentType,
  StoryViewLink,
} from "@/components/Story";
import { CompactContainer } from "@/components/ui/Container";
import { H1 } from "@/components/ui/Typography";
import { Show } from "@/components/Show";
import { EmptyState } from "@/components/EmptyState";
import { Callout } from "@/components/Callout";

import { stories } from "@/utils/stories";
import { storiesContent } from "@/utils/stories-content";
import { PlanType } from "@/components/Plan";

interface Props {
  params: Promise<{ id: string }>;
}

const userPlan: PlanType = "free";

export default async function ReadStory(props: Props) {
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
                when={story.isFree || (!story.isFree && userPlan === "pro")}
                fallback={
                  <Callout
                    message="This story is for Pro members. Subscribe to unlock and
                      start reading!"
                    href="/plans"
                    buttonText="Upgrade to Pro"
                  />
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
