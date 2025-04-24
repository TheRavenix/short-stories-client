import styles from "./NewsletterSubForm.module.scss";

import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

interface Props {}

const NewsletterSubForm: React.FC<Props> = () => {
  return (
    <form className={styles.form}>
      <Input type="email" label="Email" required />
      <div className={styles.subscribeContainer}>
        <Button>Subscribe</Button>
      </div>
    </form>
  );
};

export { NewsletterSubForm };
