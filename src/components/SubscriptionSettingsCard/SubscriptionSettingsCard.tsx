import styles from "./SubscriptionSettingsCard.module.scss";

import { SettingsCard, SettingsCardRow } from "../SettingsCard";
import { SubscriptionPlanBadge } from "./SubscriptionPlanBadge";
import { CancelSubscriptionCardRow } from "./CancelSubscriptionCardRow";

interface Props {}

const SubscriptionSettingsCard: React.FC<Props> = () => {
  return (
    <SettingsCard
      title="Subscription Settings"
      description="Here you can change your subscription settings"
    >
      <SettingsCardRow label="Current Subscription Plan">
        <SubscriptionPlanBadge />
      </SettingsCardRow>
      <CancelSubscriptionCardRow />
    </SettingsCard>
  );
};

export { SubscriptionSettingsCard };
