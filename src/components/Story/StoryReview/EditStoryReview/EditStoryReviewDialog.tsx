"use client";

import { PencilIcon, XIcon } from "lucide-react";
import { useState } from "react";

import styles from "./EditStoryReview.module.css";

import { Button } from "../../../ui/Button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../../../ui/Dialog";
import { EditStoryReviewContent } from "./EditStoryReviewContent";

type Props = {
  reviewId: number
  reviewRating: number
  reviewComment: string
}

export function EditStoryReviewDialog({
  reviewId,
  reviewRating,
  reviewComment
}: Props) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div className={styles.triggerWrapper}>
        <DialogTrigger asChild>
          <Button variant='inverse' size='icon'>
            <PencilIcon size={20} />
          </Button>
        </DialogTrigger>
      </div>
      <DialogContent>
        <DialogTitle>Edit Review</DialogTitle>
        <EditStoryReviewContent
          reviewId={reviewId}
          reviewRating={reviewRating}
          reviewComment={reviewComment}
          setOpen={setOpen}
        />
        <DialogClose asChild>
          <XIcon size={20} />
        </DialogClose>
      </DialogContent>
    </Dialog>
  )
}
