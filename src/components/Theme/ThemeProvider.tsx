"use client";

import { PropsWithChildren, useEffect } from "react";

import { useThemeStore } from "@/stores/theme";

type Props = PropsWithChildren

export function ThemeProvider({ children }: Props) {
  const theme = useThemeStore((s) => s.theme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return <>{children}</>
}
