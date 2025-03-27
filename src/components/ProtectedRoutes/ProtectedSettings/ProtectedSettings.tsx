"use client";

import { PropsWithChildren } from "react";

import styles from "./ProtectedSettings.module.scss";

import { useAuthSession } from "@/hooks/auth";
import { CompactContainer } from "@/components/ui/Container";
import { Skeleton } from "@/components/Skeleton";

interface Props extends PropsWithChildren {}

const ProtectedSettings: React.FC<Props> = ({ children }) => {
  const { isLoading, isError } = useAuthSession({
    redirectTo: "/",
  });

  if (isLoading || isError) {
    return (
      <main className={styles.main}>
        <CompactContainer withPaddingBlock withContentSpacing>
          <div className={styles.skeletonHeadline}>
            <Skeleton type="text" width="200px" height="35px" />
          </div>
          <div className={styles.skeletonCards}>
            <Skeleton type="card" count={5} />
          </div>
        </CompactContainer>
      </main>
    );
  }

  return children;
};

export { ProtectedSettings };
