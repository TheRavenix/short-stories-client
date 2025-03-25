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

interface Props {}

const StoryLeaveReviewContent: React.FC<Props> = () => {
  const [rating, setRating] = useState(STAR_RATING_MAX);

  function handleReview(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
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
        <Input label="Your Comment" required />
        <Button type="submit" className={styles.postButton}>
          Post
        </Button>
      </form>
    </div>
  );
};

export { StoryLeaveReviewContent };
