import styles from "./DeleteAccount.module.scss";

import { Button } from "@/components/ui/Button";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerOverlay,
  DrawerPortal,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/Drawer";
import { DeleteAccountContent } from "./DeleteAccountContent";

interface Props {}

const DeleteAccountDrawer: React.FC<Props> = () => {
  return (
    <Drawer autoFocus>
      <DrawerTrigger asChild>
        <Button size="sm" variant="destructive">
          Delete
        </Button>
      </DrawerTrigger>
      <DrawerPortal>
        <DrawerOverlay />
        <DrawerContent className={styles.drawerContent}>
          <DrawerHeader>
            <DrawerTitle>Delete Your Account</DrawerTitle>
            <DrawerDescription>
              This action will delete your account permanently, and cannot be
              undone.
            </DrawerDescription>
          </DrawerHeader>
          <DrawerBody className={styles.drawerBody}>
            <DeleteAccountContent />
          </DrawerBody>
        </DrawerContent>
      </DrawerPortal>
    </Drawer>
  );
};

export { DeleteAccountDrawer };
