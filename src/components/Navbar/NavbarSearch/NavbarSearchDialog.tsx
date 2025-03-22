import { SearchIcon, XIcon } from "lucide-react";

import styles from "./NavbarSearch.module.scss";

import { Button } from "../../ui/Button";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../../ui/Dialog";
import { Input } from "../../ui/Input";

interface Props {}

const NavbarSearchDialog: React.FC<Props> = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="inverse" size="icon">
          <SearchIcon size={20} />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Quick Search</DialogTitle>
        <form>
          <Input label="Type something" required />
          <Button className={styles.searchButton}>Search</Button>
        </form>
        <DialogClose asChild>
          <XIcon size={20} />
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export { NavbarSearchDialog };
