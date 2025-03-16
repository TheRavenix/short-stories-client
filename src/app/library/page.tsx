import styles from "./page.module.scss";

import { Container } from "@/components/ui/Container";
import { Story } from "@/components/Story";
import { H1 } from "@/components/ui/Typography";

import { stories } from "@/utils/stories";

export default function Library() {
  return (
    <main className={styles.main}>
      <Container withPaddingBlock>
        <H1 className={styles.headline}>Library</H1>
        <div className={styles.stories}>
          {stories.map((story) => (
            <Story key={story.id} {...story} />
          ))}
        </div>
      </Container>
    </main>
  );
}
