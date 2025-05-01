"use client";

import styles from "./NewsletterSubForm.module.scss";

import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Form } from "@/components/Form";

interface Props {}

const NewsletterSubForm: React.FC<Props> = () => {
  return (
    <Form>
      <Input type="email" label="Email" required />
      <Button size="responsive">Subscribe</Button>
    </Form>
  );
};

export { NewsletterSubForm };
