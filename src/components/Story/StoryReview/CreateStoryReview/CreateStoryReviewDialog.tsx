"use client";

import { XIcon } from "lucide-react";
import { useState } from "react";

import styles from "./CreateStoryReview.module.scss";

import { Button } from "../../../ui/Button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../../../ui/Dialog";
import { CreateStoryReviewContent } from "./CreateStoryReviewContent";

interface Props {
  storyId: string;
}

const CreateStoryReviewDialog: React.FC<Props> = ({ storyId }) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div className={styles.triggerWrapper}>
        <DialogTrigger asChild>
          <Button>Add a Review</Button>
        </DialogTrigger>
      </div>
      <DialogContent>
        <DialogTitle>Add a Review</DialogTitle>
        <CreateStoryReviewContent storyId={storyId} setOpen={setOpen} />
        <DialogClose asChild>
          <XIcon size={20} />
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export { CreateStoryReviewDialog };
