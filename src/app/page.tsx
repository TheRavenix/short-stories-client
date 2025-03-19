import Link from "next/link";

import styles from "./page.module.scss";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HeroCanvas } from "@/components/HeroCanvas";
import { Story } from "@/components/Story";
import { H1, H2, P } from "@/components/ui/Typography";

import { stories } from "@/utils/stories";

export default function Home() {
  return (
    <main>
      <Container withPaddingBlock withContentSpacing>
        <div className={styles.hero}>
          <HeroCanvas />
          <div className={styles.heroContent}>
            <H1 transform="capitalize" variant="primary">
              Discover amazing short stories
            </H1>
            <P>Read, imagine, and escape into worlds beyond your own.</P>
            <Link href="/library">
              <Button>Explore Stories</Button>
            </Link>
          </div>
        </div>
        <div className={styles.featured}>
          <H1 transform="capitalize" className={styles.featuredHeadline}>
            Featured stories
          </H1>
          <div className={styles.featuredStories}>
            {stories.map((story) => (
              <Story key={story.id} {...story} />
            ))}
          </div>
          <div className={styles.featuredExploreMoreContainer}>
            <Link href="/library">
              <Button>Explore More</Button>
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}
