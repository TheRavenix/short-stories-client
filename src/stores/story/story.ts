'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type StoreState = {
  storyView: string
  storyLayout: string
  setStoryView: (view: string) => void
  setStoryLayout: (layout: string) => void
}

export const useStoryStore = create(
  persist<StoreState>(
    (set) => ({
      storyView: 'grid',
      storyLayout: 'card',

      setStoryView(view) {
        set((state) => ({ ...state, storyView: view }))
      },
      setStoryLayout(layout) {
        set((state) => ({ ...state, storyLayout: layout }))
      }
    }),
    {
      name: 'story_store'
    }
  )
)
