import { Card, CardContent } from "@/components/ui/Card";
import { StoryContent, StoryContentType } from "../../StoryContent";

type Props = {
  storyContent: StoryContentType
}

export function StoryCardLayout({ storyContent }: Props) {
  return (
    <Card>
      <CardContent>
        {storyContent.content.map((contentText, index) => (
          <StoryContent contentText={contentText} index={index} />
        ))}
      </CardContent>
    </Card>
  )
}
