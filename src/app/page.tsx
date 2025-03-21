import Link from "next/link";

import styles from "./page.module.scss";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HeroCanvas } from "@/components/HeroCanvas";
import { Story } from "@/components/Story";
import { H1, P } from "@/components/ui/Typography";

import { stories } from "@/utils/stories";
import { ContactForm } from "@/components/ContactForm";
import { SignUpForm } from "@/components/SignUpForm";
import { CompactContainer } from "@/components/ui/Container";

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
          <H1 transform="capitalize" className={styles.headline}>
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
      <CompactContainer withPaddingBlock withContentSpacing>
        <div className={styles.signUp}>
          <H1 transform="capitalize" className={styles.headline}>
            Sign up
          </H1>
          <SignUpForm />
        </div>
        <div className={styles.contact}>
          <H1 transform="capitalize" className={styles.headline}>
            Contact
          </H1>
          <ContactForm />
        </div>
      </CompactContainer>
    </main>
  );
}
