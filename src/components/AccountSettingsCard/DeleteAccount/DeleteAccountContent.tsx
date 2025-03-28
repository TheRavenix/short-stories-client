"use client";

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { service } from "@/service";
import { AxiosError } from "axios";

import styles from "./DeleteAccount.module.scss";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { P, Span } from "@/components/ui/Typography";

import { useUserStore } from "@/stores/user";

interface Props {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DeleteAccountContent: React.FC<Props> = ({ setOpen }) => {
  const mustType = "DELETE MY ACCOUNT";
  const [confirmMessage, setConfirmMessage] = useState("");
  const userId = useUserStore((s) => s._id);

  const mutation = useMutation({
    mutationFn: service.user.deleteOne,
    onSuccess(data, variables) {
      console.log(data.message);
      window.location.replace("/sign-in");
    },
    onError(error: AxiosError<{ message: string }>) {
      alert(error.response?.data.message);
    },
  });

  function handleDelete(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (confirmMessage.toUpperCase() !== mustType) {
      return;
    }

    mutation.mutate(userId);
  }

  return (
    <form className={styles.form} onSubmit={handleDelete}>
      <P size="lg">
        Type{" "}
        <Span size="lg" weight="bold">
          {mustType}
        </Span>
      </P>
      <Input
        label="Type here"
        required
        value={confirmMessage}
        onChange={(e) => setConfirmMessage(e.target.value)}
      />
      <Button
        type="submit"
        variant="destructive"
        disabled={
          confirmMessage.toUpperCase() !== mustType || mutation.isPending
        }
      >
        Delete
      </Button>
    </form>
  );
};

export { DeleteAccountContent };
