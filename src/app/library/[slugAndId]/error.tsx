"use client";

import styles from "./page.module.scss";

import { Callout } from "@/components/Callout";
import { Container } from "@/components/ui/Container";

export default function StoryPageError() {
  return (
    <main className={styles.noStoryMain}>
      <Container withPaddingBlock>
        <Callout
          message="This story hasn’t been written yet… or maybe it got lost!"
          href="/library"
          buttonText="Back to Library"
        />
      </Container>
    </main>
  );
}
