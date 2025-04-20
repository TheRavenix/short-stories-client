import styles from "./ContactForm.module.scss";

import { Input } from "../ui/Input";
import { Button } from "../ui/Button";

interface Props {}

const ContactForm: React.FC<Props> = () => {
  return (
    <form className={styles.form}>
      <div className={styles.nameAndEmail}>
        <Input label="Your name (Optional)" />
        <Input type="email" label="Email" required />
      </div>
      <Input label="Subject (Optional)" />
      <Input label="Message" required />
      <div className={styles.sendMessageContainer}>
        <Button>Send Message</Button>
      </div>
    </form>
  );
};

export { ContactForm };
