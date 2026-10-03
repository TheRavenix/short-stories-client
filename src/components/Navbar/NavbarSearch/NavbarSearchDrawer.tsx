"use client";

import { SearchIcon } from "lucide-react";
import { useState } from "react";

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
import { NavbarSearchContent } from "./NavbarSearchContent";

export function NavbarSearchDrawer() {
  const [open, setOpen] = useState(false)

  return (
    <Drawer open={open} onOpenChange={setOpen} autoFocus>
      <DrawerTrigger asChild>
        <Button variant='inverse' size='icon'>
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
            <NavbarSearchContent setOpen={setOpen} />
          </DrawerBody>
        </DrawerContent>
      </DrawerPortal>
    </Drawer>
  )
}
