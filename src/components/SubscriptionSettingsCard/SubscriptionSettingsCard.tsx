import styles from "./SubscriptionSettingsCard.module.scss";

import { SettingsCard, SettingsCardRow } from "../SettingsCard";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";

interface Props {}

const SubscriptionSettingsCard: React.FC<Props> = () => {
  return (
    <SettingsCard
      title="Subscription Settings"
      description="Here you can change your subscription settings"
    >
      <SettingsCardRow label="Current Subscription Plan">
        <Badge>Free</Badge>
      </SettingsCardRow>
      <SettingsCardRow label="Cancel your Subscription">
        <Button size="sm" variant="inverse">
          Cancel
        </Button>
      </SettingsCardRow>
    </SettingsCard>
  );
};

export { SubscriptionSettingsCard };
