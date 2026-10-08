import { LabelRow } from '@/components/LabelRow'
import { SettingsCard } from '../SettingsCard'
import { ThemeSelect } from '@/components/theme/ThemeSelect'

export function SitePreferencesCard() {
  return (
    <SettingsCard
      title='Site Preferences'
      description='Here you can change the site preferences'
    >
      <LabelRow label='Preferred theme'>
        <ThemeSelect />
      </LabelRow>
    </SettingsCard>
  )
}
