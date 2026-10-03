"use client";

import styles from "./SubscriptionSettingsCard.module.scss";

import { Badge } from "../../ui/Badge";
import { useProfile } from "@/hooks/profile";

export function SubscriptionPlanBadge() {
  const { profile } = useProfile()
  return <Badge className={styles.planBadge}>{profile?.plan}</Badge>
}
