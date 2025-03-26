import { Suspense } from "react";

import styles from "./page.module.scss";

import { H1 } from "@/components/ui/Typography";
import { CompactContainer } from "@/components/ui/Container";
import { Plans } from "@/components/Plans";

export default function PlansPage() {
  return (
    <main className={styles.main}>
      <CompactContainer withPaddingBlock>
        <H1 className={styles.headline}>Plans</H1>
        <Suspense>
          <Plans />
        </Suspense>
      </CompactContainer>
    </main>
  );
}
