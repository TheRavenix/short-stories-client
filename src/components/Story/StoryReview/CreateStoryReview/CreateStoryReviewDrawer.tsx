"use client";

import { useState } from "react";

import styles from "./CreateStoryReview.module.scss";

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
import { CreateStoryReviewContent } from "./CreateStoryReviewContent";

interface Props {
  storyId: string;
}

const CreateStoryReviewDrawer: React.FC<Props> = ({ storyId }) => {
  const [open, setOpen] = useState(false);

  return (
    <Drawer open={open} onOpenChange={setOpen} autoFocus>
      <div className={styles.triggerWrapper}>
        <DrawerTrigger asChild>
          <Button>Add a Review</Button>
        </DrawerTrigger>
      </div>
      <DrawerPortal>
        <DrawerOverlay />
        <DrawerContent className={styles.drawerContent}>
          <DrawerHeader>
            <DrawerTitle>Add a Review</DrawerTitle>
          </DrawerHeader>
          <DrawerBody className={styles.drawerBody}>
            <CreateStoryReviewContent storyId={storyId} setOpen={setOpen} />
          </DrawerBody>
        </DrawerContent>
      </DrawerPortal>
    </Drawer>
  );
};

export { CreateStoryReviewDrawer };
