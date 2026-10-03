import { EyeIcon } from "lucide-react";

import styles from "./StoryPreviewCard.module.scss";

import { EmptyState } from "@/components/EmptyState";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { P } from "@/components/ui/Typography";
import { StoryContent } from "../../StoryContent";

type Props = {
  id: number
  name: string
  preview: string[]
}

export function StoryPreviewCard({ id, name, preview }: Props) {
  return (
    <Card>
      <CardHeader>
        <P
          size='xl'
          weight='semi-bold'
          transform='capitalize'
          className={styles.uiFont}
        >
          {name}'s preview
        </P>
      </CardHeader>
      <CardContent>
        {
          preview.length > 0 ?
            <div className={styles.storyContentList}>
              {preview.map((contentText, index) => (
                <StoryContent
                  key={index}
                  contentText={contentText}
                  index={index}
                  isHeaderSaveToolShown={false}
                />
              ))}
            </div> :
            <EmptyState
              icon={<EyeIcon />}
              message='No preview available. Start reading to explore the story!'
            />
        }
      </CardContent>
    </Card>
  )
}
