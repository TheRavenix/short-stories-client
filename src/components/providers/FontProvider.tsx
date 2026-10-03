"use client";

import { PropsWithChildren, useEffect } from "react";
import { useFontStore } from "@/stores/font";

type Props = PropsWithChildren

export function FontProvider({ children }: Props) {
  const uiFont = useFontStore((s) => s.uiFont)
  const readingFont = useFontStore((s) => s.readingFont)

  useEffect(() => {
    document.documentElement.setAttribute('data-ui-font', uiFont)
  }, [uiFont])

  useEffect(() => {
    document.documentElement.setAttribute('data-reading-font', readingFont)
  }, [readingFont])

  return <>{children}</>
}
