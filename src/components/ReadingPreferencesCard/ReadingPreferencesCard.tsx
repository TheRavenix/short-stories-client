import styles from "./ReadingPreferencesCard.module.scss";

import { SettingsCard, SettingsCardItem } from "../SettingsCard";
import { Input } from "../ui/Input";
import { ReadingFontSelect } from "../Font";

interface Props {}

const ReadingPreferencesCard: React.FC<Props> = () => {
  return (
    <SettingsCard
      title="Reading Preferences"
      description="Here you can change your reading preferences"
    >
      <SettingsCardItem label="Reading font">
        <ReadingFontSelect />
      </SettingsCardItem>
      <SettingsCardItem label="Text size adjustments">
        <Input label="Size" type="number" />
      </SettingsCardItem>
    </SettingsCard>
  );
};

export { ReadingPreferencesCard };
