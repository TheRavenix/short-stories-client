import styles from "./ReadingPreferencesCard.module.scss";

import { SettingsCard, SettingsCardItem } from "../SettingsCard";
import { StoryContentFontSelect, StoryContentFontSizeSelect } from "../Story";
import { ReadingLayoutCardItem } from "./ReadingLayoutCardItem";

interface Props {}

const ReadingPreferencesCard: React.FC<Props> = () => {
  return (
    <SettingsCard
      title="Reading Preferences"
      description="Here you can change your reading preferences"
    >
      <ReadingLayoutCardItem />
      <SettingsCardItem label="Reading font">
        <StoryContentFontSelect />
      </SettingsCardItem>
      <SettingsCardItem label="Text size adjustments">
        <StoryContentFontSizeSelect />
      </SettingsCardItem>
    </SettingsCard>
  );
};

export { ReadingPreferencesCard };
