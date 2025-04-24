"use client";

import { XIcon } from "lucide-react";
import { useState } from "react";

import styles from "./DeleteAccount.module.scss";

import { Button } from "../../../ui/Button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "../../../ui/Dialog";
import { DeleteAccountContent } from "./DeleteAccountContent";

interface Props {}

const DeleteAccountDialog: React.FC<Props> = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm" variant="destructive">
          Delete
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Delete Your Account</DialogTitle>
        <DialogDescription>
          This action will delete your account permanently, and cannot be
          undone.
        </DialogDescription>
        <DeleteAccountContent setOpen={setOpen} />
        <DialogClose asChild>
          <XIcon size={20} />
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export { DeleteAccountDialog };
