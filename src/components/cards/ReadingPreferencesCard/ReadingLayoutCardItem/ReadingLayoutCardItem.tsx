"use client";

import { SettingsCardItem } from "@/components/cards/SettingsCard";
import { StoryLayoutSelect } from "@/components/Story";

import { useProfile } from "@/hooks/profile";

interface Props {}

const ReadingLayoutCardItem: React.FC<Props> = () => {
  const { profile } = useProfile();

  if (profile?.plan !== "pro") return null;

  return (
    <SettingsCardItem label="Reading layout">
      <StoryLayoutSelect />
    </SettingsCardItem>
  );
};

export { ReadingLayoutCardItem };
