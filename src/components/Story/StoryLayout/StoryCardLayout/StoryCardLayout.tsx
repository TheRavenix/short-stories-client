import { Card, CardContent } from "@/components/ui/Card";
import { StoryContent, StoryContentType } from "../../StoryContent";

interface Props {
  storyContent: StoryContentType;
}

const StoryCardLayout: React.FC<Props> = ({ storyContent }) => {
  return (
    <Card>
      <CardContent>
        {storyContent.content.map((contentText, index) => (
          <StoryContent contentText={contentText} index={index} />
        ))}
      </CardContent>
    </Card>
  );
};

export { StoryCardLayout };
