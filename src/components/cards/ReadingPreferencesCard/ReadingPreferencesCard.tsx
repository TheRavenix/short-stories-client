import { SettingsCard } from "../SettingsCard";
import { RomanNumeralsSwitch } from "./RomanNumeralsSwitch";
import { LineNumeralsSwitch } from "./LineNumberingSwitch";
import { StoryContentFontSizeSelect } from "@/components/Story/StoryContent/StoryContentFontSizeSelect";
import { SettingsCardItem } from "../SettingsCard/SettingsCardItem";

export function ReadingPreferencesCard() {
  return (
    <SettingsCard
      title='Reading Preferences'
      description='Here you can change your reading preferences'
    >
      <SettingsCardItem label='Text size adjustment'>
        <StoryContentFontSizeSelect />
      </SettingsCardItem>
      <SettingsCardItem label='Show line numerals' labelHtmlFor='line_numerals'>
        <LineNumeralsSwitch />
      </SettingsCardItem>
      <SettingsCardItem
        label='Use roman numerals'
        labelHtmlFor='roman_numerals'
      >
        <RomanNumeralsSwitch />
      </SettingsCardItem>
    </SettingsCard>
  )
}
