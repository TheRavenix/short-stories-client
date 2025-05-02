import { ArrowLeftIcon } from "lucide-react";

import styles from "./StoryBackButton.module.scss";

import { Button } from "@/components/ui/Button";
import { StoryViewLink } from "../../story-view";

interface Props {
  storySlug: string | undefined;
}

const StoryBackButton: React.FC<Props> = ({ storySlug }) => {
  return (
    <StoryViewLink
      href={storySlug ? `/s/${storySlug}` : "/s"}
      className={styles.backToStory}
    >
      <Button variant="ghost" size="icon">
        <ArrowLeftIcon />
      </Button>
    </StoryViewLink>
  );
};

export { StoryBackButton };
