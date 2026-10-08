'use client'

import { SettingsCard } from '../SettingsCard'
import { LabelRowSwitch } from '@/components/LabelRow/LabelRowSwitch'
import { LabelRowSelect } from '@/components/LabelRow/LabelRowSelect'
import { useStoryReadStore } from '@/stores/story/story-read'
import { useStoryStore } from '@/stores/story'
import { useProfile } from '@/hooks/profile'

export function ReadingPreferencesCard() {
  const { profile } = useProfile()
  const storyStore = useStoryStore()
  const storyReadStore = useStoryReadStore()

  return (
    <SettingsCard
      title='Reading Preferences'
      description='Here you can change your reading preferences'
    >
      <LabelRowSelect 
        label='Text size adjustment' 
        defaultValue={storyReadStore.fontSize} 
        onValueChange={storyReadStore.setFontSize}
        selectItems={
          [
            { value: '14px', children: 'Small' },
            { value: '16px', children: 'Normal' },
            { value: '18px', children: 'Medium' },
            { value: '20px', children: 'Large' },
            { value: '24px', children: 'Extra Large' },
            { value: '28px', children: 'XXL' }
          ]
        }
      />
      <LabelRowSwitch
        label='Show line numerals' 
        checked={storyReadStore.lineNumeralsActive} 
        onCheckedChange={storyReadStore.setLineNumeralsActive} 
      />
      <LabelRowSwitch
        label='Use roman numerals' 
        checked={storyReadStore.romanNumeralsActive} 
        onCheckedChange={storyReadStore.setRomanNumeralsActive} 
      />
      {
        profile?.plan === 'pro' && 
        <LabelRowSelect
          label='Reading layout'
          defaultValue={storyStore.storyLayout}
          onValueChange={storyStore.setStoryLayout}
          selectItems={
            [
              { value: 'card', children: 'Card' },
              { value: 'book', children: 'Book' }
            ]
          }
        />
    }
    </SettingsCard>
  )
}
