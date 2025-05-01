"use client";

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

import styles from "./DeleteStory.module.scss";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { P, Span } from "@/components/ui/Typography";
import { ActionSlot } from "@/components/ActionSlot";

import { useToastStore } from "@/stores";

import { services } from "@/services";

interface Props {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  storyId: string;
  storyName: string;
}

const DeleteStoryContent: React.FC<Props> = ({
  setOpen,
  storyId,
  storyName,
}) => {
  const [confirmMessage, setConfirmMessage] = useState("");
  const addToast = useToastStore((s) => s.addToast);
  const confirmed = confirmMessage.toLowerCase() === storyName.toLowerCase();

  const mutation = useMutation({
    mutationFn: services.story.deleteStory,
    onSuccess(data) {
      addToast({
        title: "Done",
        description: data.message,
      });
      window.location.replace("/s");
    },
    onError(error) {
      addToast({
        title: "Error delete story",
        description: error.message,
        variant: "error",
      });
    },
  });

  function handleDelete(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!confirmed) return;

    mutation.mutate(storyId);
  }

  return (
    <form className={styles.form} onSubmit={handleDelete}>
      <P size="lg">
        Type{" "}
        <Span size="lg" weight="bold">
          {storyName}
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
    </form>
  );
};

export { DeleteStoryContent };
