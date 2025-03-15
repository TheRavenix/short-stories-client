import styles from "./page.module.scss";

import { Container } from "@/components/ui/Container";

export default function Library() {
  return (
    <main className={styles.main}>
      <Container>
        <h1>Library</h1>
      </Container>
    </main>
  );
}
