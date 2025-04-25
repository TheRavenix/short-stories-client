import {
  StoryContentFontSelect,
  StoryContentFontSizeSelect,
} from "../../StoryContent";
import { StoryLayoutSelect } from "../../StoryLayout";

interface Props {}

const StoryReadTools: React.FC<Props> = () => {
  return (
    <div>
      <StoryLayoutSelect />
      <StoryContentFontSelect />
      <StoryContentFontSizeSelect />
    </div>
  );
};

export { StoryReadTools };
