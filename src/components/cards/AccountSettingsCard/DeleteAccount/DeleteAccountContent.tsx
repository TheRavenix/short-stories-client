"use client";

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { XIcon } from "lucide-react";

import styles from "./DeleteAccount.module.scss";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { P, Span } from "@/components/ui/Typography";
import {
  ToastAction,
  ToastDescription,
  ToastRoot,
  ToastTitle,
} from "@/components/ui/Toast";

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
      window.location.replace("/sign-in");
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
    <>
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
      {mutation.isError && (
        <ToastRoot>
          <ToastTitle>Error delete account</ToastTitle>
          <ToastDescription variant="error">
            {mutation.error?.message}
          </ToastDescription>
          <ToastAction altText="Action" asChild>
            <Button size="icon" variant="ghost">
              <XIcon size={20} />
            </Button>
          </ToastAction>
        </ToastRoot>
      )}
    </>
  );
};

export { DeleteAccountContent };
