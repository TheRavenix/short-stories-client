"use client";

import { create } from "zustand";

type Theme = "light" | "dark";

interface UseThemeStoreState {
  theme: Theme;
  setTheme(theme: Theme): void;
  toggleTheme(): void;
}

const useThemeStore = create<UseThemeStoreState>((set) => ({
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
}));

export { useThemeStore, type Theme };
