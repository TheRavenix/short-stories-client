"use client";

import { useEffect } from "react";

export function SeparatorHighlighter() {
  useEffect(() => {
    const separators = document.querySelectorAll(`[role='separator']`)

    const handleScroll = () => {
      separators.forEach((separator) => {
        const rect = separator.getBoundingClientRect()

        if (rect.bottom < 0) {
          separator.setAttribute('data-highlighted', 'true')
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return null
}
