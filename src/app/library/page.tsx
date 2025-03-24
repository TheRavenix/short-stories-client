import { BookIcon } from "lucide-react";

import styles from "./page.module.scss";

import { Container } from "@/components/ui/Container";
import { Story } from "@/components/Story";
import { H1 } from "@/components/ui/Typography";
import { Show } from "@/components/Show";
import { EmptyState } from "@/components/EmptyState";
import { LibraryFilters } from "@/components/LibraryFilters";

import { stories } from "@/utils/stories";

export default function Library() {
  return (
    <main className={styles.main}>
      <Container withPaddingBlock>
        <div className={styles.content}>
          <H1 className={styles.headline}>Library</H1>
          <Show
            when={stories.length > 0}
            fallback={
              <EmptyState
                icon={<BookIcon />}
                message="No stories available yet. Check back later for new adventures!"
              />
            }
          >
            <LibraryFilters />
            <div className={styles.stories}>
              {stories.map((story) => (
                <Story key={story.id} {...story} />
              ))}
            </div>
          </Show>
        </div>
      </Container>
    </main>
  );
}
