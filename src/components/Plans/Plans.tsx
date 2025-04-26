"use client";

import { useSearchParams } from "next/navigation";

import styles from "./Plans.module.scss";

import { TabsList, TabsTrigger, TabsContent } from "@/components/ui/Tabs";
import { SearchParamTabs } from "@/components/SearchParamTabs";
import { Plan } from "./Plan";

import { freePlanFeatures, proPlanFeatures } from "@/data";

interface Props {}

const Plans: React.FC<Props> = () => {
  const searchParams = useSearchParams();
  const plan = searchParams.get("plan") || "free";

  return (
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
          price={2.99}
          planFeatures={proPlanFeatures}
          duration="Monthly"
        />
      </TabsContent>
    </SearchParamTabs>
  );
};

export { Plans };
