import Link from "next/link";

import styles from "./SignUpForm.module.scss";

import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { P } from "../ui/Typography";

interface Props {}

const SignUpForm: React.FC<Props> = () => {
  return (
    <form className={styles.form}>
      <Input label="Your Name (Optional)" />
      <Input type="email" label="Email" required />
      <Input type="password" label="Password" required />
      <div className={styles.endContent}>
        <Button>Sign up</Button>
        <P variant="gray">
          You already have an account?{" "}
          <Link href="/sign-in" className={styles.signInLink}>
            Sign in
          </Link>
        </P>
      </div>
    </form>
  );
};

export { SignUpForm };
