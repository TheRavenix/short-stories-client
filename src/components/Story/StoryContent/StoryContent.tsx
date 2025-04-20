import styles from "./StoryContent.module.scss";

import { Separator } from "@/components/ui/Separator";
import { StoryContentText } from "./StoryContentText";

type StoryContentType = {
  _id: string;
  storyId: string;
  content: string[];
};

interface Props extends StoryContentType {}

const StoryContent: React.FC<Props> = ({ content }) => {
  return (
    <div className={styles.content}>
      {content.map((sc, index) => (
        <div key={index} className={styles.item}>
          <StoryContentText>
            {index + 1}. {sc}
          </StoryContentText>
          <Separator />
        </div>
      ))}
    </div>
  );
};

export { StoryContent, type StoryContentType };
