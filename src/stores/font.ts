"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

type StoreState = {
  uiFont: string
  readingFont: string
  readingFontSize: string
  setUiFont(font: string): void
  setReadingFont(font: string): void
  setReadingFontSize(size: string): void
}

export const useFontStore = create(
  persist<StoreState>(
    (set) => ({
      uiFont: 'inter',
      readingFont: 'source-sans3',
      readingFontSize: '20px',

      setUiFont(font) {
        set((state) => ({ ...state, uiFont: font }))
      },
      setReadingFont(font) {
        set((state) => ({ ...state, readingFont: font }))
      },
      setReadingFontSize(size) {
        set((state) => ({ ...state, readingFontSize: size }))
      },
    }),
    {
      name: 'font_store'
    }
  )
)
