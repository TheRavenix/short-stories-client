import styles from "./page.module.scss";

import { Container } from "@/components/ui/Container";
import { Input } from "@/components/ui/Input";
import { H1, P } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function SignIn() {
  return (
    <main className={styles.main}>
      <Container withPaddingBlock>
        <H1 className={styles.headline}>Sign In</H1>
        <form className={styles.form}>
          <Input type="email" label="Email" required />
          <Input type="password" label="Password" required />
          <div className={styles.endContent}>
            <Button>Sign in</Button>
            <P variant="gray">
              You don't have an account?{" "}
              <Link href="/sign-up" className={styles.signUpLink}>
                Sign up
              </Link>
            </P>
          </div>
        </form>
      </Container>
    </main>
  );
}
