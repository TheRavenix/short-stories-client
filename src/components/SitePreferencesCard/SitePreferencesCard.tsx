import styles from "./ReadingPreferencesCard.module.scss";

import { SettingsCard, SettingsCardItem } from "../SettingsCard";
import { ThemeSelect } from "../Theme";

interface Props {}

const SitePreferencesCard: React.FC<Props> = () => {
  return (
    <SettingsCard
      title="Site Preferences"
      description="Here you can change the site preferences"
    >
      <SettingsCardItem label="Preferred theme">
        <ThemeSelect />
      </SettingsCardItem>
    </SettingsCard>
  );
};

export { SitePreferencesCard };
