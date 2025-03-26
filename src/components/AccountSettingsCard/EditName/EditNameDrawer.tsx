import styles from "./EditName.module.scss";

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
import { EditNameContent } from "./EditNameContent";

interface Props {}

const EditNameDrawer: React.FC<Props> = () => {
  return (
    <Drawer autoFocus>
      <DrawerTrigger asChild>
        <Button size="sm" variant="inverse">
          Edit
        </Button>
      </DrawerTrigger>
      <DrawerPortal>
        <DrawerOverlay />
        <DrawerContent className={styles.drawerContent}>
          <DrawerHeader>
            <DrawerTitle>Edit Your Name</DrawerTitle>
          </DrawerHeader>
          <DrawerBody className={styles.drawerBody}>
            <EditNameContent />
          </DrawerBody>
        </DrawerContent>
      </DrawerPortal>
    </Drawer>
  );
};

export { EditNameDrawer };
