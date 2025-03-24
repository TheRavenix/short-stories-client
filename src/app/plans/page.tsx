import styles from "./page.module.scss";

import { H1 } from "@/components/ui/Typography";
import { CompactContainer } from "@/components/ui/Container";
import { Plan, PlanType } from "@/components/Plan";
import { TabsList, TabsTrigger, TabsContent } from "@/components/ui/Tabs";
import { SearchParamTabs } from "@/components/SearchParamTabs";

import { freePlanFeatures, proPlanFeatures } from "@/data/plans";

interface Props {
  searchParams: Promise<{ plan: PlanType }>;
}

export default async function Plans(props: Props) {
  const searchParams = await props.searchParams;
  const plan = searchParams.plan || "free";

  return (
    <main className={styles.main}>
      <CompactContainer withPaddingBlock>
        <H1 className={styles.headline}>Plans</H1>
        <SearchParamTabs defaultValue={plan} paramKey="plan">
          <TabsList fullWidth>
            <TabsTrigger value="free">Free</TabsTrigger>
            <TabsTrigger value="pro">Pro</TabsTrigger>
          </TabsList>

          <TabsContent value="free">
            <Plan
              type="free"
              price={0}
              currentPlan
              planFeatures={freePlanFeatures}
            />
          </TabsContent>

          <TabsContent value="pro">
            <Plan
              type="pro"
              price={3.99}
              planFeatures={proPlanFeatures}
              duration="Monthly"
            />
          </TabsContent>
        </SearchParamTabs>
      </CompactContainer>
    </main>
  );
}
