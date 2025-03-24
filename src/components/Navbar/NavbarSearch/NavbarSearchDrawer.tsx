"use client";

import { SearchIcon } from "lucide-react";
import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

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

import { useNavbarSearch } from "./use-navbar-search";

interface Props {}

const NavbarSearchDrawer: React.FC<Props> = () => {
  const pathName = usePathname();
  const { query, setQuery, handleSearch } = useNavbarSearch();
  const [open, setOpen] = useState(false);

  return (
    <Drawer open={open} onOpenChange={setOpen} autoFocus>
      <DrawerTrigger asChild>
        <Button variant="inverse" size="icon">
          <SearchIcon size={20} />
        </Button>
      </DrawerTrigger>
      <DrawerPortal>
        <DrawerOverlay />
        <DrawerContent className={styles.drawerContent}>
          <DrawerHeader>
            <DrawerTitle>Search Stories</DrawerTitle>
          </DrawerHeader>
          <DrawerBody className={styles.drawerBody}>
            <form onSubmit={(e) => handleSearch(e, () => setOpen(false))}>
              <Input
                label="Enter a Keyword"
                required={pathName !== "/library"}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <Button type="submit" className={styles.searchButton}>
                Search
              </Button>
            </form>
          </DrawerBody>
        </DrawerContent>
      </DrawerPortal>
    </Drawer>
  );
};

export { NavbarSearchDrawer };
