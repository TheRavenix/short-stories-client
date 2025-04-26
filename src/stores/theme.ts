"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

type Theme = "light" | "dark" | "system";

interface StoreState {
  theme: Theme;
  setTheme(theme: Theme): void;
}

const useThemeStore = create(
  persist<StoreState>(
    (set) => ({
      theme: "system",

      setTheme(theme) {
        set((state) => ({ ...state, theme }));
      },
    }),
    {
      name: "theme_store",
    }
  )
);

export { useThemeStore, type Theme };
