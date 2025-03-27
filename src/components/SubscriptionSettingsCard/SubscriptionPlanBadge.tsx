"use client";

import styles from "./SubscriptionSettingsCard.module.scss";

import { Badge } from "../ui/Badge";

import { useUserStore } from "@/stores/user";

interface Props {}

const SubscriptionPlanBadge: React.FC<Props> = () => {
  const plan = useUserStore((s) => s.plan);

  return <Badge className={styles.planBadge}>{plan}</Badge>;
};

export { SubscriptionPlanBadge };
