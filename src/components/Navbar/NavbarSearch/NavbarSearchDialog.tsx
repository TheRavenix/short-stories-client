"use client";

import { SearchIcon, XIcon } from "lucide-react";
import { useState } from "react";

import styles from "./NavbarSearch.module.scss";

import { Button } from "../../ui/Button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../../ui/Dialog";
import { NavbarSearchContent } from "./NavbarSearchContent";

interface Props {}

const NavbarSearchDialog: React.FC<Props> = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="inverse" size="icon">
          <SearchIcon size={20} />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Search Stories</DialogTitle>
        <NavbarSearchContent setOpen={setOpen} />
        <DialogClose asChild>
          <XIcon size={20} />
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export { NavbarSearchDialog };
