"use client";

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

import { AxiosError } from "axios";

import styles from "./DeleteAccount.module.scss";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { P, Span } from "@/components/ui/Typography";

import { useProfile } from "@/hooks/profile";

import { services } from "@/services";

interface Props {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DeleteAccountContent: React.FC<Props> = ({ setOpen }) => {
  const mustType = "DELETE MY ACCOUNT";
  const [confirmMessage, setConfirmMessage] = useState("");
  const { profile } = useProfile();

  const mutation = useMutation({
    mutationFn: services.user.deleteOne,
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

    mutation.mutate(profile?._id || "");
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
