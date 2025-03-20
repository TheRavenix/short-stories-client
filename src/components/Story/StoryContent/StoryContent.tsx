import styles from "./StoryContent.module.scss";

import { P } from "@/components/ui/Typography";
import { Separator } from "@/components/ui/Separator";

type StoryContentType = {
  id?: string;
  storyId: string;
  content: string[];
};

interface Props extends StoryContentType {}

const StoryContent: React.FC<Props> = ({ content }) => {
  return (
    <div className={styles.content}>
      {content.map((sc, index) => (
        <div key={index} className={styles.item}>
          <P size="xl">{sc}</P>
          <Separator />
        </div>
      ))}
    </div>
  );
};

export { StoryContent, type StoryContentType };
