import styles from "./page.module.scss";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function Home() {
  return (
    <main>
      <Container withPaddingBlock withContentSpacing>
        <div className={styles.hero}>
          <h1 className={styles.heroHeadline}>
            Discover amazing short stories
          </h1>
          <p className={styles.heroTagline}>
            Read, imagine, and escape into worlds beyond your own.
          </p>
          <Button>Explore Stories</Button>
        </div>
      </Container>
    </main>
  );
}
