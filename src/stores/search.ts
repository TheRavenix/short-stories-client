"use client";

import { create } from "zustand";

interface UseSearchStoreState {
  libraryQuery: string;
  setLibraryQuery(q: string): void;
}

const useSearchStore = create<UseSearchStoreState>((set) => ({
  libraryQuery: "",

  setLibraryQuery(q) {
    set((state) => ({ ...state, libraryQuery: q }));
  },
}));

export { useSearchStore };
