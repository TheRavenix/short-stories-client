"use client";

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

import styles from "./DeleteAccount.module.scss";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { P, Span } from "@/components/ui/Typography";
import { ActionSlot } from "@/components/ActionSlot";
import { Form } from "@/components/Form";

import { useProfile } from "@/hooks/profile";
import { useToastStore } from "@/stores/toast";

import { services } from "@/services";

interface Props {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DELETE_CONFIRM = "DELETE MY ACCOUNT";

const DeleteAccountContent: React.FC<Props> = ({ setOpen }) => {
  const [confirmMessage, setConfirmMessage] = useState("");
  const { profile } = useProfile();
  const addToast = useToastStore((s) => s.addToast);
  const confirmed = confirmMessage.toUpperCase() === DELETE_CONFIRM;

  const mutation = useMutation({
    mutationFn: services.user.deleteUser,
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
    if (!confirmed) return;

    mutation.mutate(profile?._id || "");
  }

  return (
    <Form onSubmit={handleDelete}>
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
      <ActionSlot>
        <Button
          type="submit"
          variant="destructive"
          disabled={!confirmed || mutation.isPending}
        >
          Delete
        </Button>
      </ActionSlot>
    </Form>
  );
};

export { DeleteAccountContent };
