import { BookmarkIcon } from "lucide-react";

import styles from "./StoryContent.module.scss";

import { ClipboardButton } from "@/components/buttons";
import { Button } from "@/components/ui/Button";
import { Separator } from "@/components/ui/Separator";
import { StoryContentHeading } from "./StoryContentHeading";
import { StoryContentText } from "./StoryContentText";

type StoryContentType = {
  _id: string;
  storyId: string;
  content: string[];
};

interface Props {
  showHeaderTools?: boolean;
  showHeaderSaveTool?: boolean;
  index: number;
  contentText: string;
}

const StoryContent: React.FC<Props> = ({
  showHeaderTools = true,
  showHeaderSaveTool = true,
  index,
  contentText,
}) => {
  return (
    <div className={styles.content}>
      <div className={styles.contentHeader}>
        <div>
          <StoryContentHeading index={index} />
        </div>
        {showHeaderTools && (
          <div className={styles.contentHeaderTools}>
            <ClipboardButton
              text={contentText}
              message="Story line copied to clipboard."
            />
            {showHeaderSaveTool && (
              <Button variant="ghost" size="icon">
                <BookmarkIcon size={20} />
              </Button>
            )}
          </div>
        )}
      </div>
      <StoryContentText>{contentText}</StoryContentText>
      <Separator />
    </div>
  );
};

export { StoryContent, type StoryContentType };
