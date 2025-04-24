"use client";

import { XIcon } from "lucide-react";
import { useState } from "react";

import styles from "./EditEmail.module.scss";

import { Button } from "../../../ui/Button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../../../ui/Dialog";
import { EditEmailContent } from "./EditEmailContent";

interface Props {}

const EditEmailDialog: React.FC<Props> = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm" variant="inverse">
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Edit Your Email</DialogTitle>
        <EditEmailContent setOpen={setOpen} />
        <DialogClose asChild>
          <XIcon size={20} />
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export { EditEmailDialog };
