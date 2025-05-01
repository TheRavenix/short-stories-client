"use client";

import styles from "./ContactForm.module.scss";

import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Form } from "@/components/Form";

interface Props {}

const ContactForm: React.FC<Props> = () => {
  return (
    <Form spacing="md">
      <div className={styles.nameAndEmail}>
        <Input label="Your name (Optional)" />
        <Input type="email" label="Email" required />
      </div>
      <Input label="Subject (Optional)" />
      <Input label="Message" required />
      <Button size="responsive" type="submit">
        Send Message
      </Button>
    </Form>
  );
};

export { ContactForm };
