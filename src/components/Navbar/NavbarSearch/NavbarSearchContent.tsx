"use client";

import { Input } from "@/components/ui/Input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import styles from "./NavbarSearch.module.scss";

import { Button } from "@/components/ui/Button";

import { useSearchStore } from "@/stores/search";
import { ActionSlot } from "@/components/ActionSlot";

interface Props {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavbarSearchContent: React.FC<Props> = ({ setOpen }) => {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const query = useSearchStore((s) => s.libraryQuery);
  const setQuery = useSearchStore((s) => s.setLibraryQuery);

  function handleSearch(
    e: React.FormEvent<HTMLFormElement>,
    callback?: () => void
  ) {
    e.preventDefault();

    if (typeof callback === "function") callback();
    if (query === searchParams.get("q")) return;

    if (pathName === "/s") {
      const params = new URLSearchParams(searchParams);
      params.set("q", query);
      router.replace(`/s?${params.toString()}`);
    } else router.push(`/s?q=${query}`);
  }

  return (
    <form
      className={styles.contentForm}
      onSubmit={(e) => handleSearch(e, () => setOpen(false))}
    >
      <Input
        label="Enter a Keyword"
        required={pathName !== "/s"}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ActionSlot>
        <Button type="submit">Search</Button>
      </ActionSlot>
    </form>
  );
};

export { NavbarSearchContent };
