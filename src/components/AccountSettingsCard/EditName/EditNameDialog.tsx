import { XIcon } from "lucide-react";

import styles from "./EditName.module.scss";

import { Button } from "../../ui/Button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../../ui/Dialog";
import { EditNameContent } from "./EditNameContent";

interface Props {}

const EditNameDialog: React.FC<Props> = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" variant="inverse">
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Edit Your Name</DialogTitle>
        <EditNameContent />
        <DialogClose asChild>
          <XIcon size={20} />
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export { EditNameDialog };
