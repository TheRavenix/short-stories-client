import { ArrowLeftIcon } from "lucide-react";

import styles from "./StoryBackButton.module.css";

import { Button } from "@/components/ui/Button";
import { StoryViewLink } from "../../story-view/StoryViewLink";

type Props = {
  storySlug?: string
}

export function StoryBackButton({ storySlug }: Props) {
  return (
    <StoryViewLink
      href={storySlug !== undefined ? `/s/${storySlug}` : 's'}
      className={styles.backToStory}
    >
      <Button variant='ghost' size='icon'>
        <ArrowLeftIcon />
      </Button>
    </StoryViewLink>
  );
};
