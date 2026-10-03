import { SettingsCard, SettingsCardItem } from "../SettingsCard";
import { SubscriptionPlanBadge } from "./SubscriptionPlanBadge";
import { CancelSubscriptionCardItem } from "./CancelSubscriptionCardItem";

export function SubscriptionSettingsCard() {
  return (
    <SettingsCard
      title='Subscription Settings'
      description='Here you can change your subscription settings'
    >
      <SettingsCardItem label='Current subscription plan'>
        <SubscriptionPlanBadge />
      </SettingsCardItem>
      <CancelSubscriptionCardItem />
    </SettingsCard>
  )
}
