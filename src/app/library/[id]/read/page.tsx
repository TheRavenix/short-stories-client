import { redirect } from "next/navigation";
import { PageProps } from "../../../../../.next/types/app/page";
import Link from "next/link";

import styles from "./page.module.scss";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { SeparatorHighlighter } from "@/components/SeparatorHighlighter";
import { Button } from "@/components/ui/Button";

import { stories } from "@/utils/stories";
import { storiesContent } from "@/utils/stories-content";
import { StoryContent, StoryContentType } from "@/components/Story";
import { CompactContainer } from "@/components/ui/Container";
import { ArrowLeftIcon } from "lucide-react";

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
            <Card>
              <CardHeader>
                <CardTitle variant="primary">{story.name}</CardTitle>
              </CardHeader>
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
