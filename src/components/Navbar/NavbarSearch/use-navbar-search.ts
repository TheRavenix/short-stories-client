"use client";

import { useSearchParams, useRouter } from "next/navigation";

import { useSearchStore } from "@/stores/search";

function useNavbarSearch() {
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

    const params = new URLSearchParams(searchParams);
    params.set("q", query);
    router.replace(`/library?${params.toString()}`);
  }

  return { query, setQuery, handleSearch };
}

export { useNavbarSearch };
