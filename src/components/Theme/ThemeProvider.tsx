"use client";

import { PropsWithChildren, useEffect } from "react";

import { useThemeStore } from "@/stores/theme";

interface Props extends PropsWithChildren {}

const ThemeProvider: React.FC<Props> = ({ children }) => {
  const theme = useThemeStore((s) => s.theme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return <>{children}</>;
};

export { ThemeProvider };
