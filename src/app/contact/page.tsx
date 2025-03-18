import styles from "./page.module.scss";

import { Container } from "@/components/ui/Container";
import { Input } from "@/components/ui/Input";
import { H1 } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";

export default function Contact() {
  return (
    <main className={styles.main}>
      <Container withPaddingBlock>
        <H1 className={styles.headline}>Contact</H1>
        <form className={styles.form}>
          <div className={styles.nameAndEmail}>
            <Input label="Your name" />
            <Input type="email" label="Email" />
          </div>
          <Input label="Subject" />
          <Input label="Message" />
          <div className={styles.sendMessageContainer}>
            <Button>Send Message</Button>
          </div>
        </form>
      </Container>
    </main>
  );
}
