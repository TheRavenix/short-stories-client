import { CheckIcon, XIcon } from "lucide-react";

import styles from "./Plan.module.scss";

import { Card, CardContent, CardHeader } from "../ui/Card";
import { H2, H3, P, Span } from "../ui/Typography";
import { Button } from "../ui/Button";
import { Show } from "../Show";

import { PlanFeature } from "@/data/plans";

type PlanType = "free" | "pro";

interface Props {
  type: PlanType;
  price: number;
  duration?: string;
  currentPlan?: boolean;
  planFeatures: PlanFeature[];
}

const Plan: React.FC<Props> = ({
  type,
  price,
  duration,
  currentPlan = false,
  planFeatures,
}) => {
  return (
    <Card className={styles.card}>
      <CardHeader className={styles.cardHeader}>
        <H2 variant="primary" transform="capitalize">
          {type}
        </H2>
      </CardHeader>
      <CardContent className={styles.cardContent}>
        <H3>${price.toFixed(2)}</H3>
        {typeof duration !== "undefined" && <P>{duration}</P>}
        {planFeatures.map((feature) => {
          return (
            <div key={feature.name} className={styles.planFeature}>
              <P size="lg" variant="gray">
                {feature.name}
              </P>
              <Show
                when={feature.checked}
                fallback={<XIcon size={18} className={styles.xIcon} />}
              >
                <Show
                  when={typeof feature.suffix !== "undefined"}
                  fallback={
                    <CheckIcon size={18} className={styles.checkIcon} />
                  }
                >
                  <div className={styles.suffixContainer}>
                    <CheckIcon size={18} className={styles.checkIcon} />
                    <Span variant="primary">{feature.suffix}</Span>
                  </div>
                </Show>
              </Show>
            </div>
          );
        })}
        <Show when={!currentPlan} fallback={<P>This is your current plan.</P>}>
          <Button className={styles.joinButton}>Join Now</Button>
        </Show>
      </CardContent>
    </Card>
  );
};

export { Plan, type PlanType };
