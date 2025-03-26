import styles from "./ChangePassword.module.scss";

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
import { ChangePasswordContent } from "./ChangePasswordContent";

interface Props {}

const ChangePasswordDrawer: React.FC<Props> = () => {
  return (
    <Drawer autoFocus>
      <DrawerTrigger asChild>
        <Button size="sm" variant="inverse">
          Change
        </Button>
      </DrawerTrigger>
      <DrawerPortal>
        <DrawerOverlay />
        <DrawerContent className={styles.drawerContent}>
          <DrawerHeader>
            <DrawerTitle>Change Your Password</DrawerTitle>
          </DrawerHeader>
          <DrawerBody className={styles.drawerBody}>
            <ChangePasswordContent />
          </DrawerBody>
        </DrawerContent>
      </DrawerPortal>
    </Drawer>
  );
};

export { ChangePasswordDrawer };
