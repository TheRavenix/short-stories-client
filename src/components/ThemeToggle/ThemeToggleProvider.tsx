"use client";

import { PropsWithChildren, useEffect, useRef } from "react";

import { Theme, useThemeStore } from "@/stores/theme";

interface Props extends PropsWithChildren {}

const ThemeToggleProvider: React.FC<Props> = ({ children }) => {
  const theme = useThemeStore((s) => s.theme);
  const setTheme = useThemeStore((s) => s.setTheme);
  const mounted = useRef(false);

  function applyTheme(theme: string) {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as Theme;

    if (storedTheme !== null) {
      setTheme(storedTheme);
      applyTheme(storedTheme);
    }

    mounted.current = true;
  }, []);

  useEffect(() => {
    if (mounted.current) {
      applyTheme(theme);
    }
  }, [theme]);

  return <>{children}</>;
};

export { ThemeToggleProvider };
