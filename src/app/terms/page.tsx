import styles from "./page.module.scss";

import { CompactContainer } from "@/components/ui/Container";
import { H1, H3, P } from "@/components/ui/Typography";

export default function TermsAndConditions() {
  return (
    <main className={styles.main}>
      <CompactContainer withPaddingBlock>
        <H1 className={styles.headline}>Terms and Conditions</H1>
        <div className={styles.content}>
          <P size="xl" className={styles.tagline}>
            By using Short Stories, you agree to these Terms and Conditions. If
            you don’t agree, please don’t use the site.
          </P>

          <div className={styles.section}>
            <H3>Content ownership</H3>
            <div className={styles.descriptions}>
              <P>
                All stories and content on this site are owned by Short Stories.
                You may not copy, share, or sell them without permission.
              </P>
            </div>
          </div>

          <div className={styles.section}>
            <H3>User responsibilities</H3>
            <div className={styles.descriptions}>
              <P>
                You agree not to misuse the site or its content. This includes
                not trying to access paid content without paying.
              </P>
            </div>
          </div>

          <div className={styles.section}>
            <H3>Free and premium content </H3>
            <div className={styles.descriptions}>
              <P>
                Some stories are free to read, while others require a
                subscription. By subscribing, you agree to pay the fees and
                follow the rules for premium content.
              </P>
            </div>
          </div>

          <div className={styles.section}>
            <H3>Changes to terms</H3>
            <div className={styles.descriptions}>
              <P>
                We may update these terms at any time. If you keep using the
                site, you agree to the new terms.
              </P>
            </div>
          </div>
        </div>
      </CompactContainer>
    </main>
  );
}
