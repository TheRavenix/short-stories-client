import { XIcon } from "lucide-react";

import styles from "./EditEmail.module.scss";

import { Button } from "../../ui/Button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../../ui/Dialog";
import { EditEmailContent } from "./EditEmailContent";

interface Props {}

const EditEmailDialog: React.FC<Props> = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" variant="inverse">
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Edit Your Email</DialogTitle>
        <EditEmailContent />
        <DialogClose asChild>
          <XIcon size={20} />
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export { EditEmailDialog };
