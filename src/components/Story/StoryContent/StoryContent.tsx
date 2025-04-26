import { SaveIcon } from "lucide-react";

import styles from "./StoryContent.module.scss";

import { Separator } from "@/components/ui/Separator";
import { StoryContentText } from "./StoryContentText";
import { Button } from "@/components/ui/Button";
import { StoryContentItemHeading } from "./StoryContentItemHeading";

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
            <div>
              <StoryContentItemHeading index={index} />
            </div>
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
