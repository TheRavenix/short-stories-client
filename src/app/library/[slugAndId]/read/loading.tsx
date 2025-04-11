import { ArrowLeftIcon } from "lucide-react";

import styles from "./page.module.scss";

import { CompactContainer } from "@/components/ui/Container";
import { Skeleton } from "@/components/Skeleton";
import { Button } from "@/components/ui/Button";

export default function ReadStoryLoading() {
  return (
    <main className={styles.main}>
      <CompactContainer withPaddingBlock>
        <div className={styles.containerContent}>
          <Button variant="ghost" size="icon">
            <ArrowLeftIcon />
          </Button>
          <div className={styles.skeletonHeadline}>
            <Skeleton type="text" width="200px" height="35px" />
          </div>
          <Skeleton type="card" />
        </div>
      </CompactContainer>
    </main>
  );
}
