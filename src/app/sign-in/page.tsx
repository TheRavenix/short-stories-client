import styles from "./page.module.css";

import { H1 } from "@/components/ui/Typography";
import { CompactContainer } from "@/components/ui/Container/CompactContainer";
import { SignInForm } from "@/components/auth/SignInForm";
import { AuthPageGuard } from "@/components/guards/AuthPageGuard";

export default function SignIn() {
  return (
    <>
      <AuthPageGuard />
      <main className={styles.main}>
        <CompactContainer spacing='lg' withPaddingBlock>
          <H1 className={styles.headline}>Sign In</H1>
          <SignInForm />
        </CompactContainer>
      </main>
    </>
  )
}
