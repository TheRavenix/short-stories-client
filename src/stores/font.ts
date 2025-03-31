"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface StoreState {
  uiFont: string;
  readingFont: string;
  setUiFont(font: string): void;
  setReadingFont(font: string): void;
}

export const useFontStore = create(
  persist<StoreState>(
    (set) => ({
      uiFont: "inter",
      readingFont: "source-sans3",

      setUiFont(font) {
        set((state) => ({ ...state, uiFont: font }));
      },
      setReadingFont(font) {
        set((state) => ({ ...state, readingFont: font }));
      },
    }),
    {
      name: "font_store",
    }
  )
);
