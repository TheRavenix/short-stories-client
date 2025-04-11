"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

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

import { useSearchStore } from "@/stores/search";

import { FILTER_DEFAULT_TIMEOUT } from "@/constants/filters";

interface Props {}

const LibraryFilters: React.FC<Props> = ({}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = useSearchStore((s) => s.libraryQuery);
  const setQuery = useSearchStore((s) => s.setLibraryQuery);
  const [plan, setPlan] = useState(searchParams.get("plan") || "all-plans");
  const [genre, setGenre] = useState(searchParams.get("genre") || "all-genres");
  const [order, setOrder] = useState(searchParams.get("order") || "random");
  const filterTimoutRef = useRef<NodeJS.Timeout>(null!);

  function updateSearchParams(paramKey: string, paramValue: string) {
    const params = new URLSearchParams(searchParams);
    params.set(paramKey, paramValue);
    router.push(`/library?${params.toString()}`);
  }

  function handleQueryFilter(query: string) {
    clearTimeout(filterTimoutRef.current);
    filterTimoutRef.current = setTimeout(() => {
      if (query !== searchParams.get("q")) {
        updateSearchParams("q", query);
      }
    }, FILTER_DEFAULT_TIMEOUT);
  }

  function handleOnPlanChange(value: string) {
    setPlan(value);

    if (value !== searchParams.get("plan")) {
      updateSearchParams("plan", value);
    }
  }

  function handleOnGenreChange(value: string) {
    setGenre(value);

    if (value !== searchParams.get("genre")) {
      updateSearchParams("genre", value);
    }
  }

  function handleOnOrderChange(value: string) {
    setOrder(value);

    if (value !== searchParams.get("order")) {
      updateSearchParams("order", value);
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
        <Select value={plan} onValueChange={handleOnPlanChange}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="all-plans">All Plans</SelectItem>
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
      <div>
        <Input
          label="Search stories"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            handleQueryFilter(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export { LibraryFilters };
