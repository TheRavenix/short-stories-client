"use client";

import { useState } from "react";
import { PencilIcon } from "lucide-react";

import styles from "./EditStoryReview.module.scss";

import { Button } from "@/components/ui/Button";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  DrawerPortal,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/Drawer";
import { EditStoryReviewContent } from "./EditStoryReviewContent";

interface Props {
  reviewId: string;
  reviewRating: number;
  reviewComment: string;
}

const EditStoryReviewDrawer: React.FC<Props> = ({
  reviewId,
  reviewRating,
  reviewComment,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Drawer open={open} onOpenChange={setOpen} autoFocus>
      <div className={styles.triggerWrapper}>
        <DrawerTrigger asChild>
          <Button variant="inverse" size="icon">
            <PencilIcon size={20} />
          </Button>
        </DrawerTrigger>
      </div>
      <DrawerPortal>
        <DrawerOverlay />
        <DrawerContent className={styles.drawerContent}>
          <DrawerHeader>
            <DrawerTitle>Edit Review</DrawerTitle>
          </DrawerHeader>
          <DrawerBody className={styles.drawerBody}>
            <EditStoryReviewContent
              reviewId={reviewId}
              reviewRating={reviewRating}
              reviewComment={reviewComment}
              setOpen={setOpen}
            />
          </DrawerBody>
        </DrawerContent>
      </DrawerPortal>
    </Drawer>
  );
};

export { EditStoryReviewDrawer };
