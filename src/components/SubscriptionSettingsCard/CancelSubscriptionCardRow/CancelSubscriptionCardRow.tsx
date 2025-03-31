"use client";

import styles from "./CancelSubscription.module.scss";

import { queryClient } from "@/components/QueryProvider";
import { SettingsCardItem } from "@/components/SettingsCard";
import { Button } from "@/components/ui/Button";

import { ProfileType } from "@/service/user";

interface Props {}

const CancelSubscriptionCardRow: React.FC<Props> = () => {
  const plan = queryClient.getQueryData<ProfileType>(["profile"])?.plan;

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
