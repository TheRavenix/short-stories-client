import styles from "./not-found.module.scss";

import { Container } from "@/components/ui/Container";
import { Callout } from "@/components/Callout";

export default function NotFound() {
  return (
    <main className={styles.main}>
      <Container withPaddingBlock>
        <Callout message="Oops! This page doesn’t exist… or maybe it’s hiding from you!" />
      </Container>
    </main>
  );
}
