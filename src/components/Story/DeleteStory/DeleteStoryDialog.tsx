"use client";

import { XIcon } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/Button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog";
import { DeleteStoryContent } from "./DeleteStoryContent";

interface Props {
  storyId: string;
  storyName: string;
}

const DeleteStoryDialog: React.FC<Props> = ({ storyId, storyName }) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="destructive">Delete</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Delete Story</DialogTitle>
        <DeleteStoryContent
          setOpen={setOpen}
          storyId={storyId}
          storyName={storyName}
        />
        <DialogClose asChild>
          <XIcon size={20} />
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export { DeleteStoryDialog };
