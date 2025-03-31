"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

type Theme = "light" | "dark";

interface StoreState {
  theme: Theme;
  setTheme(theme: Theme): void;
  toggleTheme(): void;
}

const useThemeStore = create(
  persist<StoreState>(
    (set) => ({
      theme: "light",

      setTheme(theme) {
        set((state) => ({ ...state, theme }));
      },
      toggleTheme() {
        set((state) => ({
          ...state,
          theme: state.theme === "light" ? "dark" : "light",
        }));
      },
    }),
    {
      name: "theme_store",
    }
  )
);

export { useThemeStore, type Theme };
