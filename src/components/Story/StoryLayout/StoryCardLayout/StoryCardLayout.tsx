import { Card, CardContent } from "@/components/ui/Card";
import { StoryContent } from "../../StoryContent";
import { StoryType } from "../../Story";

type Props = {
  story: StoryType
}

export function StoryCardLayout({ story }: Props) {
  return (
    <Card>
      <CardContent>
        {story.content.map((contentText, index) => (
          <StoryContent contentText={contentText} index={index} />
        ))}
      </CardContent>
    </Card>
  )
}
