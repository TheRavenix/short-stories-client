"use client";

import styles from "./CancelSubscription.module.scss";

import { SettingsCardRow } from "@/components/SettingsCard";
import { Button } from "@/components/ui/Button";
import { useUserStore } from "@/stores/user";

interface Props {}

const CancelSubscriptionCardRow: React.FC<Props> = () => {
  const plan = useUserStore((s) => s.plan);

  if (plan !== "pro") return null;

  return (
    <SettingsCardRow label="Cancel your Subscription">
      <Button size="sm" variant="inverse">
        Cancel
      </Button>
    </SettingsCardRow>
  );
};

export { CancelSubscriptionCardRow };
