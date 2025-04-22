"use client";

import { XIcon } from "lucide-react";
import { useState } from "react";

import styles from "./StoryLeaveReview.module.scss";

import { Button } from "../../ui/Button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../../ui/Dialog";
import { StoryLeaveReviewContent } from "./StoryLeaveReviewContent";

interface Props {
  storyId: string;
}

const StoryLeaveReviewDialog: React.FC<Props> = ({ storyId }) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div className={styles.triggerWrapper}>
        <DialogTrigger asChild>
          <Button>Leave a Review</Button>
        </DialogTrigger>
      </div>
      <DialogContent>
        <DialogTitle>Leave a Review</DialogTitle>
        <StoryLeaveReviewContent storyId={storyId} onOpenChange={setOpen} />
        <DialogClose asChild>
          <XIcon size={20} />
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export { StoryLeaveReviewDialog };
