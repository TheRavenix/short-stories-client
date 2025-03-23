"use client";

import { useSearchParams, useRouter } from "next/navigation";

import { useSearchStore } from "@/stores/search";

function useNavbarSearch() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const query = useSearchStore((s) => s.libraryQuery);
  const setQuery = useSearchStore((s) => s.setLibraryQuery);

  function hasSearchParam(name: string): boolean {
    return searchParams.get(name) !== null;
  }

  function getSearchParam(name: string): string {
    return searchParams.get(name) || "";
  }

  function handleSearch(
    e: React.FormEvent<HTMLFormElement>,
    callback?: () => void
  ) {
    e.preventDefault();

    if (typeof callback === "function") callback();
    if (query === searchParams.get("q")) return;

    let href = `/library?q=${query}`;

    if (hasSearchParam("type")) href += `&type=${getSearchParam("type")}`;
    if (hasSearchParam("genre")) href += `&genre=${getSearchParam("genre")}`;
    if (hasSearchParam("order")) href += `&order=${getSearchParam("order")}`;

    router.push(href);
  }

  return { query, setQuery, handleSearch };
}

export { useNavbarSearch };
