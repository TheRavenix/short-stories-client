import { SearchIcon } from "lucide-react";

import styles from "./NavbarSearch.module.scss";

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
import { Input } from "@/components/ui/Input";

interface Props {}

const NavbarSearchDrawer: React.FC<Props> = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="inverse" size="icon">
          <SearchIcon size={20} />
        </Button>
      </DrawerTrigger>
      <DrawerPortal>
        <DrawerOverlay />
        <DrawerContent className={styles.drawerContent}>
          <DrawerHeader>
            <DrawerTitle>Quick Search</DrawerTitle>
          </DrawerHeader>
          <DrawerBody className={styles.drawerBody}>
            <form>
              <Input label="Type something" required />
              <Button className={styles.searchButton}>Search</Button>
            </form>
          </DrawerBody>
        </DrawerContent>
      </DrawerPortal>
    </Drawer>
  );
};

export { NavbarSearchDrawer };
