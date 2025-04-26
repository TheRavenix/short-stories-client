"use client";

import styles from "./SubscriptionSettingsCard.module.scss";

import { Badge } from "../../ui/Badge";

import { useProfile } from "@/hooks";

interface Props {}

const SubscriptionPlanBadge: React.FC<Props> = () => {
  const { profile } = useProfile();
  return <Badge className={styles.planBadge}>{profile?.plan}</Badge>;
};

export { SubscriptionPlanBadge };
