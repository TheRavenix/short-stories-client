import { XIcon } from "lucide-react";

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

interface Props {}

const StoryLeaveReviewDialog: React.FC<Props> = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Leave a Review</Button>
      </DialogTrigger>
      <DialogContent className={styles.dialogContent}>
        <DialogTitle>Leave a Review</DialogTitle>
        <StoryLeaveReviewContent />
        <DialogClose asChild>
          <XIcon size={20} />
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export { StoryLeaveReviewDialog };
