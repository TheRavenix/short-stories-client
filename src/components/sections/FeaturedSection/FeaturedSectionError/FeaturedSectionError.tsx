"use client";

import styles from "./FeaturedSectionError.module.scss";

import { ErrorFallback, ErrorFallbackProps } from "@/components/ErrorFallback";
import { H1 } from "@/components/ui/Typography";

interface Props extends ErrorFallbackProps {}

const FeaturedSectionError: React.FC<Props> = ({ error, reset }) => {
  return (
    <div className={styles.container}>
      <H1 transform="capitalize" className={styles.headline}>
        Featured stories & reviews
      </H1>
      <ErrorFallback error={error} reset={reset} />
    </div>
  );
};

export { FeaturedSectionError };
