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
import { H1 } from "@/components/ui/Typography";

import { stories } from "@/utils/stories";
import { storiesContent } from "@/utils/stories-content";

const isPaidUser = false;

export default async function ReadStory(props: PageProps) {
  const params = await props.params;
  const story = stories.find((s) => s.id === params.id);
  let storyContent: StoryContentType | undefined;

  if (!story) {
    return redirect("/library");
  }
  if (!story.isFree && !isPaidUser) {
    return redirect(`/library/${story.id}`);
  }

  storyContent = storiesContent.find((sc) => sc.storyId === story.id);

  if (!storyContent) {
    return redirect(`/library/${story.id}`);
  }

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
            <Card>
              <CardContent>
                <StoryContent {...storyContent} />
              </CardContent>
            </Card>
          </div>
        </CompactContainer>
      </main>
    </>
  );
}
