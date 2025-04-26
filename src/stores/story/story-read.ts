"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface StoreState {
  fontSize: string;
  lineNumeralsActive: boolean;
  romanNumeralsActive: boolean;
  setFontSize(size: string): void;
  setLineNumeralsActive(active: boolean): void;
  setRomanNumeralsActive(active: boolean): void;
}

const useStoryReadStore = create(
  persist<StoreState>(
    (set) => ({
      fontSize: "20px",
      lineNumeralsActive: true,
      romanNumeralsActive: true,

      setFontSize(size) {
        set((state) => ({ ...state, fontSize: size }));
      },
      setLineNumeralsActive(active) {
        set((state) => ({ ...state, lineNumeralsActive: active }));
      },
      setRomanNumeralsActive(active) {
        set((state) => ({ ...state, romanNumeralsActive: active }));
      },
    }),
    {
      name: "story_read_store",
    }
  )
);

export { useStoryReadStore };
