"use client";

import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMutation, useQuery } from "@tanstack/react-query";

import styles from "./EditStoryReview.module.scss";

import { Button } from "@/components/ui/Button";
import { STAR_RATING_MAX, StarRating } from "@/components/StarRating";
import { Input } from "@/components/ui/Input";
import { Form } from "@/components/Form";
import { ActionSlot } from "@/components/ActionSlot";

import { useToastStore } from "@/stores/toast";

import { services } from "@/services";

interface Props {
  reviewId: string;
  reviewRating: number;
  reviewComment: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditStoryReviewContent: React.FC<Props> = ({
  reviewId,
  reviewRating,
  reviewComment,
  setOpen,
}) => {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const [rating, setRating] = useState(reviewRating);
  const [comment, setComment] = useState(reviewComment);
  const addToast = useToastStore((s) => s.addToast);

  const mutation = useMutation({
    mutationKey: ["edit-story-review"],
    mutationFn: services.storyReview.editStoryReview,
    onSuccess(data) {
      let href = pathName;

      if (searchParams.get("view") === "tabs") {
        href += `?view=tabs&tab=${searchParams.get("tab")}`;
      }

      addToast({
        title: "Edit review",
        description: data.message,
      });
      setOpen(false);
      router.push(href, { scroll: false });
    },
    onError(error) {
      addToast({
        title: "Error edit review",
        description: error.message,
        variant: "error",
      });
    },
  });

  function handleReview(e: React.FormEvent<HTMLFormElement>) {
    mutation.mutate({
      reviewId,
      data: {
        stars: rating,
        comment,
      },
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
            {mutation.isPending ? "Loading..." : "Edit"}
          </Button>
        </ActionSlot>
      </Form>
    </div>
  );
};

export { EditStoryReviewContent };
