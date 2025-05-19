"use client";

import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

import styles from "./CreateStoryReview.module.scss";

import { Button } from "@/components/ui/Button";
import { STAR_RATING_MAX, StarRating } from "@/components/StarRating";
import { Input } from "@/components/ui/Input";
import { Form } from "@/components/Form";
import { ActionSlot } from "@/components/ActionSlot";

import { useToastStore } from "@/stores/toast";

import { services } from "@/services";

interface Props {
  storyId: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreateStoryReviewContent: React.FC<Props> = ({ storyId, setOpen }) => {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const [rating, setRating] = useState(STAR_RATING_MAX);
  const [comment, setComment] = useState("");
  const addToast = useToastStore((s) => s.addToast);

  const mutation = useMutation({
    mutationKey: ["create-story-review"],
    mutationFn: services.storyReview.createStoryReview,
    onSuccess(data) {
      let href = pathName;

      if (searchParams.get("view") === "tabs") {
        href += `?view=tabs&tab=${searchParams.get("tab")}`;
      }

      addToast({
        title: "Post review",
        description: data.message,
      });
      setOpen(false);
      router.push(href, { scroll: false });
    },
    onError(error) {
      addToast({
        title: "Error post review",
        description: error.message,
        variant: "error",
      });
    },
  });

  function handleReview(e: React.FormEvent<HTMLFormElement>) {
    mutation.mutate({
      stars: rating,
      comment,
      storyId,
    });
  }

  return (
    <div className={styles.content}>
      <StarRating rating={rating} setRating={setRating} interactive />
      <Form onSubmit={handleReview}>
        <Input
          label="Your Comment"
          required
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <ActionSlot>
          <Button
            type="submit"
            className={styles.postButton}
            disabled={mutation.isPending}
          >
            {mutation.isPending ? "Loading..." : "Add"}
          </Button>
        </ActionSlot>
      </Form>
    </div>
  );
};

export { CreateStoryReviewContent };
