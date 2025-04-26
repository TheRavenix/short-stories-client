import styles from "./ReadingPreferencesCard.module.scss";

import { SettingsCard, SettingsCardItem } from "../SettingsCard";
import { StoryContentFontSizeSelect } from "../../Story";
import { RomanNumeralsSwitch } from "./RomanNumeralsSwitch";
import { LineNumeralsSwitch } from "./LineNumberingSwitch";

interface Props {}

const ReadingPreferencesCard: React.FC<Props> = () => {
  return (
    <SettingsCard
      title="Reading Preferences"
      description="Here you can change your reading preferences"
    >
      <SettingsCardItem label="Text size adjustment">
        <StoryContentFontSizeSelect />
      </SettingsCardItem>
      <SettingsCardItem label="Show line numerals" labelHtmlFor="line_numerals">
        <LineNumeralsSwitch />
      </SettingsCardItem>
      <SettingsCardItem
        label="Use roman numerals"
        labelHtmlFor="roman_numerals"
      >
        <RomanNumeralsSwitch />
      </SettingsCardItem>
    </SettingsCard>
  );
};

export { ReadingPreferencesCard };
