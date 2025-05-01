"use client";

import styles from "./NewsletterSubForm.module.scss";

import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { ActionSlot } from "@/components/ActionSlot";
import { Form } from "@/components/Form";

interface Props {}

const NewsletterSubForm: React.FC<Props> = () => {
  return (
    <Form>
      <Input type="email" label="Email" required />
      <ActionSlot>
        <Button>Subscribe</Button>
      </ActionSlot>
    </Form>
  );
};

export { NewsletterSubForm };
