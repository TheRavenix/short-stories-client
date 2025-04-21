"use client";

import { MinusIcon, PlusIcon } from "lucide-react";
import { useState } from "react";

import styles from "./StoryLeaveReview.module.scss";

import { Button } from "@/components/ui/Button";
import {
  STAR_RATING_MAX,
  STAR_RATING_MIN,
  StarRating,
} from "@/components/StarRating";
import { Input } from "@/components/ui/Input";
import { useMutation } from "@tanstack/react-query";
import { services } from "@/services";
import { AxiosError } from "axios";
import { ErrorResponse } from "@/types/response";

interface Props {
  storyId: string;
}

const StoryLeaveReviewContent: React.FC<Props> = ({ storyId }) => {
  const [rating, setRating] = useState(STAR_RATING_MAX);
  const [comment, setComment] = useState("");

  const mutation = useMutation({
    mutationKey: ["post-review"],
    mutationFn: services.storyReview.createStoryReview,
    onSuccess(data, variables, context) {},
    onError(error: AxiosError<ErrorResponse>, variables, context) {
      if (error) {
        alert(error.response?.data.message);
      }
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
  );
};

export { StoryLeaveReviewContent };
