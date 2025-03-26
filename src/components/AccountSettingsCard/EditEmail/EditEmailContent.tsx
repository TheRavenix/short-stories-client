"use client";

import styles from "./EditEmail.module.scss";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

interface Props {}

const EditEmailContent: React.FC<Props> = () => {
  function handleEdit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <form className={styles.form} onSubmit={handleEdit}>
      <Input type="email" label="Current Email" required />
      <Input type="email" label="New Email" required />
      <Button type="submit">Save</Button>
    </form>
  );
};

export { EditEmailContent };
