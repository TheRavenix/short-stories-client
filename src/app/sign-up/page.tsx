import styles from "./page.module.scss";

import { H1 } from "@/components/ui/Typography";
import { SignUpForm } from "@/components/forms";
import { CompactContainer } from "@/components/ui/Container";
import { AuthPageGuard } from "@/components/guards";

export default function SignIn() {
  return (
    <>
      <AuthPageGuard />
      <main className={styles.main}>
        <CompactContainer withPaddingBlock>
          <H1 className={styles.headline}>Sign Up</H1>
          <SignUpForm />
        </CompactContainer>
      </main>
    </>
  );
}
