"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import styles from "./LibraryFilters.module.scss";

import { Input } from "@/components/ui/Input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";

import { useSearchStore } from "@/stores/search";

interface Props {}

const LibraryFilters: React.FC<Props> = ({}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = useSearchStore((s) => s.libraryQuery);
  const setQuery = useSearchStore((s) => s.setLibraryQuery);
  const [type, setType] = useState(searchParams.get("type") || "all-types");
  const [genre, setGenre] = useState(searchParams.get("genre") || "all-genres");
  const [order, setOrder] = useState(searchParams.get("order") || "random");

  function updateSearchParams(
    query: string,
    type: string,
    genre: string,
    order: string
  ) {
    router.push(
      `/library?q=${query}&type=${type}&genre=${genre}&order=${order}`
    );
  }

  function handleFilter(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (query !== searchParams.get("q")) {
      updateSearchParams(query, type, genre, order);
    }
  }

  function handleOnTypeChange(value: string) {
    setType(value);

    if (value !== searchParams.get("type")) {
      updateSearchParams(query, value, genre, order);
    }
  }

  function handleOnGenreChange(value: string) {
    setGenre(value);

    if (value !== searchParams.get("genre")) {
      updateSearchParams(query, type, value, order);
    }
  }

  function handleOnOrderChange(value: string) {
    setOrder(value);

    if (value !== searchParams.get("order")) {
      updateSearchParams(query, type, genre, value);
    }
  }

  useEffect(() => {
    setQuery(searchParams.get("q") || "");

    return () => {
      setQuery("");
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.selects}>
        <Select value={type} onValueChange={handleOnTypeChange}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="all-types">All Types</SelectItem>
              <SelectItem value="free">Free</SelectItem>
              <SelectItem value="pro">Pro</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select value={genre} onValueChange={handleOnGenreChange}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="all-genres">All Genres</SelectItem>
              <SelectItem value="adventure">Adventure</SelectItem>
              <SelectItem value="mystery">Mystery</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select value={order} onValueChange={handleOnOrderChange}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="random">Random</SelectItem>
              <SelectItem value="most-popular">Most Popular</SelectItem>
              <SelectItem value="highest-rated">Highest Rated</SelectItem>
              <SelectItem value="newest-first">Newest First</SelectItem>
              <SelectItem value="oldest-first">Oldest First</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <form className={styles.form} onSubmit={handleFilter}>
        <Input
          label="Search stories"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button size="sm" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
};

export { LibraryFilters };
