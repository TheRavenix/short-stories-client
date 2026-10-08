import { SettingsCard } from "../SettingsCard";
import { ThemeSelect } from "@/components/theme/ThemeSelect";
import { SettingsCardItem } from "../SettingsCard/SettingsCardItem";

export function SitePreferencesCard() {
  return (
    <SettingsCard
      title='Site Preferences'
      description='Here you can change the site preferences'
    >
      <SettingsCardItem label='Preferred theme'>
        <ThemeSelect />
      </SettingsCardItem>
    </SettingsCard>
  )
}
