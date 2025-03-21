import styles from "./page.module.scss";

import { H1 } from "@/components/ui/Typography";
import { ContactForm } from "@/components/ContactForm";
import { CompactContainer } from "@/components/ui/Container";

export default function ContactPage() {
  return (
    <main className={styles.main}>
      <CompactContainer className={styles.mainContainer} withPaddingBlock>
        <H1 className={styles.headline}>Contact</H1>
        <ContactForm />
      </CompactContainer>
    </main>
  );
}
