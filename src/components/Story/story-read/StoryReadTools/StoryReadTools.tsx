import { StoryContentFontSelect } from "../../StoryContent/StoryContentFontSelect";
import { StoryContentFontSizeSelect } from "../../StoryContent/StoryContentFontSizeSelect";
import { StoryLayoutSelect } from "../../StoryLayout";

export function StoryReadTools() {
  return (
    <div>
      <StoryLayoutSelect />
      <StoryContentFontSelect />
      <StoryContentFontSizeSelect />
    </div>
  )
}
