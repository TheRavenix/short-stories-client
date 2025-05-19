"use client";

import { useEffect } from "react";

import styles from "./page.module.scss";

import { Callout } from "@/components/Callout";
import { Container } from "@/components/ui/Container";

import { useToastStore } from "@/stores/toast";

interface Props {
  error: Error;
  reset?: () => void;
}

export default function StoryPageError(props: Props) {
  const addToast = useToastStore((s) => s.addToast);

  useEffect(() => {
    addToast({
      title: "Error loading story",
      description: props.error.message,
      variant: "error",
    });
  }, []);

  return (
    <main className={styles.noStoryMain}>
      <Container withPaddingBlock>
        <Callout
          message="This story hasn’t been written yet… or maybe it got lost!"
          href="/s"
          buttonText="Back to Library"
        />
      </Container>
    </main>
  );
}
