import styles from "./EditEmail.module.scss";

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
import { EditEmailContent } from "./EditEmailContent";

interface Props {}

const EditEmailDrawer: React.FC<Props> = () => {
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
            <DrawerTitle>Edit Your Email</DrawerTitle>
          </DrawerHeader>
          <DrawerBody className={styles.drawerBody}>
            <EditEmailContent />
          </DrawerBody>
        </DrawerContent>
      </DrawerPortal>
    </Drawer>
  );
};

export { EditEmailDrawer };
