"use client";

import { XIcon } from "lucide-react";
import { useState } from "react";

import { Button } from "../../../ui/Button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../../../ui/Dialog";
import { EditNameContent } from "./EditNameContent";

interface Props {}

const EditNameDialog: React.FC<Props> = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm" variant="inverse">
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Edit Your Name</DialogTitle>
        <EditNameContent setOpen={setOpen} />
        <DialogClose asChild>
          <XIcon size={20} />
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export { EditNameDialog };
