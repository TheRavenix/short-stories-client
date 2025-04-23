"use client";

import { XIcon } from "lucide-react";

import styles from "./page.module.scss";

import { Callout } from "@/components/Callout";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import {
  ToastAction,
  ToastDescription,
  ToastRoot,
  ToastTitle,
} from "@/components/ui/Toast";

interface Props {
  error: Error;
  reset?: () => void;
}

export default function StoryPageError(props: Props) {
  return (
    <>
      <main className={styles.noStoryMain}>
        <Container withPaddingBlock>
          <Callout
            message="This story hasn’t been written yet… or maybe it got lost!"
            href="/library"
            buttonText="Back to Library"
          />
        </Container>
      </main>
      <ToastRoot>
        <ToastTitle>Error loading story</ToastTitle>
        <ToastDescription variant="error">
          {props.error.message}
        </ToastDescription>
        <ToastAction altText="Action" asChild>
          <Button size="icon" variant="ghost">
            <XIcon size={20} />
          </Button>
        </ToastAction>
      </ToastRoot>
    </>
  );
}
