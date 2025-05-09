"use client";

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

import styles from "./DeleteStoryReview.module.scss";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { P, Span } from "@/components/ui/Typography";
import { ActionSlot } from "@/components/ActionSlot";

import { useToastStore } from "@/stores";

import { services } from "@/services";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface Props {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  reviewId: string;
}

const CONFIRM = "CONFIRM";

const DeleteStoryReviewContent: React.FC<Props> = ({ setOpen, reviewId }) => {
  const [confirmMessage, setConfirmMessage] = useState("");
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const addToast = useToastStore((s) => s.addToast);
  const confirmed = confirmMessage.toLowerCase() === CONFIRM.toLowerCase();

  const mutation = useMutation({
    mutationKey: ["delete-story-review"],
    mutationFn: services.storyReview.deleteStoryReview,
    onSuccess(data) {
      let href = pathName;

      if (searchParams.get("view") === "tabs") {
        href += `?view=tabs&tab=${searchParams.get("tab")}`;
      }

      addToast({
        title: "Done",
        description: data.message,
      });
      router.push(href, { scroll: false });
    },
    onError(error) {
      addToast({
        title: "Error delete story review",
        description: error.message,
        variant: "error",
      });
    },
  });

  function handleDelete(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!confirmed) return;

    mutation.mutate(reviewId);
  }

  return (
    <form className={styles.form} onSubmit={handleDelete}>
      <P size="lg">Type {CONFIRM}</P>
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

export { DeleteStoryReviewContent };
