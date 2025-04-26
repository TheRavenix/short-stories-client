import { SaveIcon } from "lucide-react";

import styles from "./StoryContent.module.scss";

import { Separator } from "@/components/ui/Separator";
import { StoryContentText } from "./StoryContentText";
import { H3 } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";

import { romanize } from "@/utils/romanize";

type StoryContentType = {
  _id: string;
  storyId: string;
  content: string[];
};

interface Props {
  content: string[];
  showItemHeaderTools?: boolean;
}

const StoryContent: React.FC<Props> = ({
  content,
  showItemHeaderTools = true,
}) => {
  return (
    <div className={styles.content}>
      {content.map((sc, index) => (
        <div key={index} className={styles.item}>
          <div className={styles.itemHeader}>
            <H3>{romanize(index + 1)}</H3>
            {showItemHeaderTools && (
              <div className={styles.itemHeaderTools}>
                <Button variant="ghost" size="icon">
                  <SaveIcon size={20} />
                </Button>
              </div>
            )}
          </div>
          <StoryContentText>{sc}</StoryContentText>
          <Separator />
        </div>
      ))}
    </div>
  );
};

export { StoryContent, type StoryContentType };
