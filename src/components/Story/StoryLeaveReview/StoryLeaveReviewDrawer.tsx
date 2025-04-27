"use client";

import { useState } from "react";

import styles from "./StoryLeaveReview.module.scss";

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
import { StoryLeaveReviewContent } from "./StoryLeaveReviewContent";

interface Props {
  storyId: string;
}

const StoryLeaveReviewDrawer: React.FC<Props> = ({ storyId }) => {
  const [open, setOpen] = useState(false);

  return (
    <Drawer open={open} onOpenChange={setOpen} autoFocus>
      <div className={styles.triggerWrapper}>
        <DrawerTrigger asChild>
          <Button>Leave a Review</Button>
        </DrawerTrigger>
      </div>
      <DrawerPortal>
        <DrawerOverlay />
        <DrawerContent className={styles.drawerContent}>
          <DrawerHeader>
            <DrawerTitle>Leave a Review</DrawerTitle>
          </DrawerHeader>
          <DrawerBody className={styles.drawerBody}>
            <StoryLeaveReviewContent storyId={storyId} setOpen={setOpen} />
          </DrawerBody>
        </DrawerContent>
      </DrawerPortal>
    </Drawer>
  );
};

export { StoryLeaveReviewDrawer };
