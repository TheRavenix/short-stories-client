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

interface Props {}

const StoryLeaveReviewDrawer: React.FC<Props> = () => {
  return (
    <Drawer autoFocus>
      <DrawerTrigger asChild>
        <Button>Leave a Review</Button>
      </DrawerTrigger>
      <DrawerPortal>
        <DrawerOverlay />
        <DrawerContent className={styles.drawerContent}>
          <DrawerHeader>
            <DrawerTitle>Leave a Review</DrawerTitle>
          </DrawerHeader>
          <DrawerBody className={styles.drawerBody}>
            <StoryLeaveReviewContent />
          </DrawerBody>
        </DrawerContent>
      </DrawerPortal>
    </Drawer>
  );
};

export { StoryLeaveReviewDrawer };
