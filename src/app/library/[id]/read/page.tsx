import { redirect } from "next/navigation";
import { PageProps } from "../../../../../.next/types/app/page";
import Link from "next/link";

import styles from "./page.module.scss";

import { Container } from "@/components/ui/Container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

import { SeparatorHighlighter } from "@/components/SeparatorHighlighter/SeparatorHighlighter";
import { Button } from "@/components/ui/Button";

import { stories } from "@/utils/stories";
import { storiesContent } from "@/utils/stories-content";
import { StoryContent, StoryContentType } from "@/components/Story";

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
        <Container withPaddingBlock>
          <div className={styles.containerContent}>
            <Link href={`/library/${story.id}`} className={styles.backToStory}>
              <Button>Back to Story</Button>
            </Link>
            <Card className={styles.card}>
              <CardHeader>
                <CardTitle variant="primary">{story.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <StoryContent {...storyContent} />
              </CardContent>
            </Card>
          </div>
        </Container>
      </main>
    </>
  );
}
