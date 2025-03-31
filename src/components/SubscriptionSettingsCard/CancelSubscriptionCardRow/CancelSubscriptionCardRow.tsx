"use client";

import styles from "./CancelSubscription.module.scss";

import { SettingsCardItem } from "@/components/SettingsCard";
import { Button } from "@/components/ui/Button";
import { useUserStore } from "@/stores/user";

interface Props {}

const CancelSubscriptionCardRow: React.FC<Props> = () => {
  const plan = useUserStore((s) => s.plan);

  if (plan !== "pro") return null;

  return (
    <SettingsCardItem label="Cancel your subscription">
      <Button size="sm" variant="inverse">
        Cancel
      </Button>
    </SettingsCardItem>
  );
};

export { CancelSubscriptionCardRow };
