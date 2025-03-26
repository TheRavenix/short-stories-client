"use client";

import styles from "./EditName.module.scss";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

interface Props {}

const EditNameContent: React.FC<Props> = () => {
  function handleEdit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <form className={styles.form} onSubmit={handleEdit}>
      <Input label="Your New Name" required />
      <Button type="submit">Save</Button>
    </form>
  );
};

export { EditNameContent };
