"use client";

import { SettingsCardItem } from "@/components/cards/SettingsCard";
import { StoryLayoutSelect } from "@/components/Story/StoryLayout/StoryLayoutSelect";
import { useProfile } from "@/hooks/profile";

export function ReadingLayoutCardItem() {
  const { profile } = useProfile()

  if (profile?.plan !== 'pro') {
    return null
  }

  return (
    <SettingsCardItem label='Reading layout'>
      <StoryLayoutSelect />
    </SettingsCardItem>
  )
}
