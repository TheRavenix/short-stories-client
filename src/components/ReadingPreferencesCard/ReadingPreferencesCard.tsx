import styles from "./ReadingPreferencesCard.module.scss";

import { SettingsCard, SettingsCardItem } from "../SettingsCard";
import { StoryContentFontSizeSelect } from "../Story";

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
    </SettingsCard>
  );
};

export { ReadingPreferencesCard };
