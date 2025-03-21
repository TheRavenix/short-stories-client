import styles from "./page.module.scss";

import { CompactContainer } from "@/components/ui/Container";
import { H1, H3, P } from "@/components/ui/Typography";
import Link from "next/link";

export default function About() {
  return (
    <main className={styles.main}>
      <CompactContainer withPaddingBlock>
        <H1 className={styles.headline}>About Us</H1>
        <div className={styles.content}>
          <P size="xl" className={styles.tagline}>
            Short Stories is more than just a platform, it’s a haven for
            readers. We’ve built a carefully curated library packed with stories
            from every genre, all designed to give you a unique and immersive
            reading experience.
          </P>

          <div className={styles.section}>
            <H3>Why we started</H3>
            <div className={styles.descriptions}>
              <P>
                It all began with a simple idea: to make great stories
                accessible to everyone, no matter where they are or how much
                time they have. Whether you’re looking to escape into a
                thrilling adventure, unravel a mystery, or just enjoy a quick
                read, this platform was created with you in mind.
              </P>
              <P>
                We wanted to strip away the distractions and create a space
                where you can focus on what really matters—the stories.
              </P>
            </div>
          </div>

          <div className={styles.section}>
            <H3>How it works</H3>
            <div className={styles.descriptions}>
              <P>
                1.{" "}
                <Link href="/sign-up" className={styles.link}>
                  Sign up
                </Link>{" "}
                for an account and dive into our{" "}
                <Link href="/library" className={styles.link}>
                  Library
                </Link>
                .
              </P>
              <P>2. Pick a story that catches your eye and start reading.</P>
              <P>
                3. Start reading free stories or unlock premium content for even
                more options.
              </P>
            </div>
          </div>

          <div className={styles.section}>
            <H3>Our mission</H3>
            <div className={styles.descriptions}>
              <P>
                At the heart of it all, our goal is simple: to bring you a wide
                variety of high-quality short stories that you can enjoy
                anytime, anywhere. We believe everyone deserves access to great
                storytelling.
              </P>
            </div>
          </div>

          <div className={styles.section}>
            <H3>What we offer</H3>
            <div className={styles.descriptions}>
              <P>1. A diverse collection of stories across multiple genres.</P>
              <P>
                2. Free stories for those who don't want to pay but still want
                to read.
              </P>
              <P>
                3. Exclusive access to premium stories and features for those
                who want even more.
              </P>
            </div>
          </div>

          <div className={styles.section}>
            <H3>Your privacy matters</H3>
            <div className={styles.descriptions}>
              <P>
                1. We take your privacy seriously. Your data is yours, and we’ll
                never share it with third parties.
              </P>
              <P>
                2. For more details, check out our{" "}
                <Link href="/terms" className={styles.link}>
                  Terms and Conditions
                </Link>
                .
              </P>
            </div>
          </div>
        </div>
      </CompactContainer>
    </main>
  );
}
