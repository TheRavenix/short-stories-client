import Link from "next/link";

import styles from "./page.module.scss";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HeroCanvas } from "@/components/HeroCanvas";

export default function Home() {
  return (
    <main>
      <Container withPaddingBlock withContentSpacing>
        <div className={styles.hero}>
          <HeroCanvas />
          <div className={styles.heroContent}>
            <h1 className={styles.heroHeadline}>
              Discover amazing short stories
            </h1>
            <p className={styles.heroTagline}>
              Read, imagine, and escape into worlds beyond your own.
            </p>
            <Link href="/library">
              <Button>Explore Stories</Button>
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}
