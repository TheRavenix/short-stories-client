import { SettingsCard, SettingsCardItem } from "../SettingsCard";
import { ThemeSelect } from "@/components/Theme/ThemeSelect";

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
