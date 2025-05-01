"use client";

import { MinusIcon, PlusIcon } from "lucide-react";
import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

import styles from "./StoryLeaveReview.module.scss";

import { Button } from "@/components/ui/Button";
import {
  STAR_RATING_MAX,
  STAR_RATING_MIN,
  StarRating,
} from "@/components/StarRating";
import { Input } from "@/components/ui/Input";
import { Form } from "@/components/Form";
import { ActionSlot } from "@/components/ActionSlot";

import { useToastStore } from "@/stores";

import { services } from "@/services";

interface Props {
  storyId: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const StoryLeaveReviewContent: React.FC<Props> = ({ storyId, setOpen }) => {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const [rating, setRating] = useState(STAR_RATING_MAX);
  const [comment, setComment] = useState("");
  const addToast = useToastStore((s) => s.addToast);

  const mutation = useMutation({
    mutationKey: ["post-review"],
    mutationFn: services.storyReview.createStoryReview,
    onSuccess(data) {
      let href = `${pathName}?view=${searchParams.get("view")}`;

      if (searchParams.get("view") === "tabs") {
        href += `&tab=${searchParams.get("tab")}`;
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

  function decreaseRating() {
    setRating((prev) => (prev > STAR_RATING_MIN ? prev - 0.5 : prev));
  }

  function increaseRating() {
    setRating((prev) => (prev < STAR_RATING_MAX ? prev + 0.5 : prev));
  }

  return (
    <div className={styles.content}>
      <div className={styles.contentRatingContainer}>
        <Button variant="inverse" size="icon" onClick={decreaseRating}>
          <MinusIcon size={18} />
        </Button>
        <StarRating stars={rating} fixedWidth />
        <Button variant="inverse" size="icon" onClick={increaseRating}>
          <PlusIcon size={18} />
        </Button>
      </div>
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
            {mutation.isPending ? "Loading..." : "Post"}
          </Button>
        </ActionSlot>
      </Form>
    </div>
  );
};

export { StoryLeaveReviewContent };
