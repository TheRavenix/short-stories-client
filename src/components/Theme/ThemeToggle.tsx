"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "../ui/Button";

import { useThemeStore } from "@/stores/theme";

interface Props {}

const ThemeToggle: React.FC<Props> = () => {
  const theme = useThemeStore((s) => s.theme);
  const setTheme = useThemeStore((s) => s.setTheme);
  const [systemThemeDark, setSystemThemeDark] = useState<boolean | null>(null);

  function handleToggleTheme() {
    if (theme === "system") {
      setTheme(systemThemeDark ? "light" : "dark");
    } else setTheme(theme === "dark" ? "light" : "dark");
  }

  useEffect(() => {
    const matchMediaListener = (e: MediaQueryListEvent) => {
      setSystemThemeDark(e.matches);
    };

    setSystemThemeDark(
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", matchMediaListener);

    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", matchMediaListener);
    };
  }, []);

  return (
    <Button size="icon" onClick={handleToggleTheme}>
      {theme === "light" || (!systemThemeDark && theme === "system") ? (
        <MoonIcon size={20} />
      ) : (
        <SunIcon size={20} />
      )}
    </Button>
  );
};

export { ThemeToggle };
