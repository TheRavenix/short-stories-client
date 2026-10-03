"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Theme = "light" | "dark" | "system"

type StoreState = {
  theme: Theme
  setTheme(theme: Theme): void
}

export const useThemeStore = create(
  persist<StoreState>(
    (set) => ({
      theme: 'system',

      setTheme(theme) {
        set((state) => ({ ...state, theme }))
      }
    }),
    {
      name: 'theme_store'
    }
  )
)
