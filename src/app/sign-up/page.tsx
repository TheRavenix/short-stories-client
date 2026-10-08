import styles from "./page.module.css";

import { H1 } from "@/components/ui/Typography";
import { SignUpForm } from "@/components/auth/SignUpForm";
import { CompactContainer } from "@/components/ui/Container/CompactContainer";
import { AuthPageGuard } from "@/components/guards/AuthPageGuard";

export default function SignIn() {
  return (
    <>
      <AuthPageGuard />
      <main className={styles.main}>
        <CompactContainer spacing='lg' withPaddingBlock>
          <H1 className={styles.headline}>Sign Up</H1>
          <SignUpForm />
        </CompactContainer>
      </main>
    </>
  )
}
