"use client";

import { SettingsCardItem } from "@/components/SettingsCard";
import { Button } from "@/components/ui/Button";

import { useProfile } from "@/hooks/profile";

interface Props {}

const CancelSubscriptionCardItem: React.FC<Props> = () => {
  const { profile } = useProfile();

  if (profile?.plan !== "pro") return null;

  return (
    <SettingsCardItem label="Cancel your subscription">
      <Button size="sm" variant="inverse">
        Cancel
      </Button>
    </SettingsCardItem>
  );
};

export { CancelSubscriptionCardItem };
