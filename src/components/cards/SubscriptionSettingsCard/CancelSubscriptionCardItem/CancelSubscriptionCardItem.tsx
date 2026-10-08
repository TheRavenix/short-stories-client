"use client";

import { Button } from "@/components/ui/Button";
import { SettingsCardItem } from "../../SettingsCard/SettingsCardItem";
import { useProfile } from "@/hooks/profile";

export function CancelSubscriptionCardItem() {
  const { profile } = useProfile()

  if (profile?.plan !== 'pro') {
    return null
  }

  return (
    <SettingsCardItem label='Cancel your subscription'>
      <Button size='sm' variant='inverse'>
        Cancel
      </Button>
    </SettingsCardItem>
  )
}
