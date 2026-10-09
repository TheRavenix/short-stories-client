import { StoryContentFontSelect } from '../../StoryContent/StoryContentFontSelect'
import { StoryContentFontSizeSelect } from '../../StoryContent/StoryContentFontSizeSelect'
import { StoryLayoutSelect } from '../../StoryLayout/StoryLayoutSelect'

export function StoryReadTools() {
  return (
    <>
      <StoryLayoutSelect />
      <StoryContentFontSelect />
      <StoryContentFontSizeSelect />
    </>
  )
}
