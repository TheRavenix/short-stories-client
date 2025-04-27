"use client";

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

import styles from "./DeleteAccount.module.scss";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { P, Span } from "@/components/ui/Typography";

import { useProfile } from "@/hooks";
import { useToastStore } from "@/stores";

import { services } from "@/services";

interface Props {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DeleteAccountContent: React.FC<Props> = ({ setOpen }) => {
  const DELETE_CONFIRM = "DELETE MY ACCOUNT";
  const [confirmMessage, setConfirmMessage] = useState("");
  const { profile } = useProfile();
  const addToast = useToastStore((s) => s.addToast);

  const mutation = useMutation({
    mutationFn: services.user.deleteOne,
    onSuccess(data) {
      addToast({
        title: "Done",
        description: data.message,
      });
      window.location.replace("/sign-in");
    },
    onError(error) {
      addToast({
        title: "Error delete account",
        description: error.message,
        variant: "error",
      });
    },
  });

  function handleDelete(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (confirmMessage.toUpperCase() !== DELETE_CONFIRM) {
      return;
    }

    mutation.mutate(profile?._id || "");
  }

  return (
    <form className={styles.form} onSubmit={handleDelete}>
      <P size="lg">
        Type{" "}
        <Span size="lg" weight="bold">
          {DELETE_CONFIRM}
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
          confirmMessage.toUpperCase() !== DELETE_CONFIRM || mutation.isPending
        }
      >
        Delete
      </Button>
    </form>
  );
};

export { DeleteAccountContent };
