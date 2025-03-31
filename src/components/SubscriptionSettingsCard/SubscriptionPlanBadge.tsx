"use client";

import styles from "./SubscriptionSettingsCard.module.scss";

import { Badge } from "../ui/Badge";
import { queryClient } from "../QueryProvider";

import { ProfileType } from "@/service/user";

interface Props {}

const SubscriptionPlanBadge: React.FC<Props> = () => {
  const plan = queryClient.getQueryData<ProfileType>(["profile"])?.plan;
  return <Badge className={styles.planBadge}>{plan}</Badge>;
};

export { SubscriptionPlanBadge };
