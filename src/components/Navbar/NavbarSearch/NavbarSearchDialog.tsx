"use client";

import { SearchIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

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

import { useNavbarSearch } from "./use-navbar-search";

interface Props {}

const NavbarSearchDialog: React.FC<Props> = () => {
  const pathName = usePathname();
  const { query, setQuery, handleSearch } = useNavbarSearch();
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
        <DialogClose asChild>
          <XIcon size={20} />
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export { NavbarSearchDialog };
