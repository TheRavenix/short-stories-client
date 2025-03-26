"use client";

import styles from "./DeleteAccount.module.scss";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { P, Span } from "@/components/ui/Typography";

interface Props {}

const DeleteAccountContent: React.FC<Props> = () => {
  function handleDelete(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <form className={styles.form} onSubmit={handleDelete}>
      <P size="lg">
        Type{" "}
        <Span size="lg" weight="bold">
          DELETE MY ACCOUNT
        </Span>
      </P>
      <Input label="Type here" required />
      <Button type="submit" variant="destructive">
        Delete
      </Button>
    </form>
  );
};

export { DeleteAccountContent };
