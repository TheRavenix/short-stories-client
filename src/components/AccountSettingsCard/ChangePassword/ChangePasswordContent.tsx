"use client";

import styles from "./ChangePassword.module.scss";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

interface Props {}

const ChangePasswordContent: React.FC<Props> = () => {
  function handleChange(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <form className={styles.form} onSubmit={handleChange}>
      <Input type="password" label="Current Password" required />
      <Input type="password" label="New Password" required />
      <Button type="submit">Save</Button>
    </form>
  );
};

export { ChangePasswordContent };
