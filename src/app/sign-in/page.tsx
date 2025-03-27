import styles from "./page.module.scss";

import { H1 } from "@/components/ui/Typography";
import { CompactContainer } from "@/components/ui/Container";
import { SignInForm } from "@/components/SignInForm";
import { AuthPageGuard } from "@/components/AuthPageGuard";

export default function SignIn() {
  return (
    <>
      <AuthPageGuard />
      <main className={styles.main}>
        <CompactContainer withPaddingBlock>
          <H1 className={styles.headline}>Sign In</H1>
          <SignInForm />
        </CompactContainer>
      </main>
    </>
  );
}
