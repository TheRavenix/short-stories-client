import { BookmarkIcon } from "lucide-react";

import styles from "./StoryContent.module.scss";

import { ClipboardButton } from "@/components/buttons";
import { Button } from "@/components/ui/Button";
import { Separator } from "@/components/ui/Separator";
import { StoryContentHeading } from "./StoryContentHeading";
import { StoryContentText } from "./StoryContentText";

export type StoryContentType = {
  id: number
  storyId: number
  content: string[]
}

type Props = {
  isHeaderToolsShown?: boolean
  isHeaderSaveToolShown?: boolean
  index: number
  contentText: string
}

export function StoryContent({
  isHeaderToolsShown = true,
  isHeaderSaveToolShown = true,
  index,
  contentText
}: Props) {
  return (
    <div className={styles.content}>
      <div className={styles.contentHeader}>
        <div>
          <StoryContentHeading index={index} />
        </div>
        {isHeaderToolsShown && (
          <div className={styles.contentHeaderTools}>
            <ClipboardButton
              text={contentText}
              message="Story line copied to clipboard."
            />
            {isHeaderSaveToolShown && (
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
  )
}
