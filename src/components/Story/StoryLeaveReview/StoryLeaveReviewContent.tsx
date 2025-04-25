"use client";

import { MinusIcon, PlusIcon, XIcon } from "lucide-react";
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
import {
  ToastAction,
  ToastDescription,
  ToastRoot,
  ToastTitle,
} from "@/components/ui/Toast";

import { services } from "@/services";

interface Props {
  storyId: string;
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
}

const StoryLeaveReviewContent: React.FC<Props> = ({
  storyId,
  onOpenChange,
}) => {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const [rating, setRating] = useState(STAR_RATING_MAX);
  const [comment, setComment] = useState("");

  const mutation = useMutation({
    mutationKey: ["post-review"],
    mutationFn: services.storyReview.createStoryReview,
    onSuccess(data, variables, context) {
      let href = `${pathName}?view=${searchParams.get("view")}`;

      if (searchParams.get("view") === "tabs") {
        href += `&tab=${searchParams.get("tab")}`;
      }

      setRating(STAR_RATING_MAX);
      setComment("");
      router.push(href, { scroll: false });
    },
  });

  function handleReview(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

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
    <>
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
        <form className={styles.contentForm} onSubmit={handleReview}>
          <Input
            label="Your Comment"
            required
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <Button
            type="submit"
            className={styles.postButton}
            disabled={mutation.isPending}
          >
            {mutation.isPending ? "Loading..." : "Post"}
          </Button>
        </form>
      </div>
      {mutation.isError && (
        <ToastRoot>
          <ToastTitle>Error post review</ToastTitle>
          <ToastDescription variant="error">
            {mutation.error.message}
          </ToastDescription>
          <ToastAction altText="Action" asChild>
            <Button size="icon" variant="ghost">
              <XIcon size={20} />
            </Button>
          </ToastAction>
        </ToastRoot>
      )}
      {mutation.isSuccess && (
        <ToastRoot>
          <ToastTitle>Post review</ToastTitle>
          <ToastDescription>{mutation.data.message}</ToastDescription>
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

export { StoryLeaveReviewContent };
