import styles from "./ReadingPreferencesCard.module.scss";

import { SettingsCard, SettingsCardItem } from "../SettingsCard";
import { ThemeToggleSelect } from "../ThemeToggle";

interface Props {}

const SitePreferencesCard: React.FC<Props> = () => {
  return (
    <SettingsCard
      title="Site Preferences"
      description="Here you can change the site preferences"
    >
      <SettingsCardItem label="Preferred theme">
        <ThemeToggleSelect />
      </SettingsCardItem>
    </SettingsCard>
  );
};

export { SitePreferencesCard };
