"use client";

import { useState } from "react";

import styles from "./DeleteStory.module.scss";

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
import { DeleteStoryContent } from "./DeleteStoryContent";

interface Props {
  storyId: string;
  storyName: string;
}

const DeleteStoryDrawer: React.FC<Props> = ({ storyId, storyName }) => {
  const [open, setOpen] = useState(false);

  return (
    <Drawer open={open} onOpenChange={setOpen} autoFocus>
      <DrawerTrigger asChild>
        <Button variant="destructive">Delete</Button>
      </DrawerTrigger>
      <DrawerPortal>
        <DrawerOverlay />
        <DrawerContent className={styles.drawerContent}>
          <DrawerHeader>
            <DrawerTitle>Delete Story</DrawerTitle>
          </DrawerHeader>
          <DrawerBody className={styles.drawerBody}>
            <DeleteStoryContent
              setOpen={setOpen}
              storyId={storyId}
              storyName={storyName}
            />
          </DrawerBody>
        </DrawerContent>
      </DrawerPortal>
    </Drawer>
  );
};

export { DeleteStoryDrawer };
