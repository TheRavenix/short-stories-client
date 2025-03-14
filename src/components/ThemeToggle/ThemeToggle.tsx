"use client";

import { useEffect, useRef } from "react";

import styles from "./ThemeToggle.module.scss";

import { Theme, useThemeStore } from "@/stores/theme";
import { Button } from "../ui/Button";
import { MoonIcon, SunIcon } from "lucide-react";

interface Props {}

const ThemeToggle: React.FC<Props> = () => {
  const theme = useThemeStore((s) => s.theme);
  const toggleTheme = useThemeStore((s) => s.toggleTheme);
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

  return (
    <Button size="icon" onClick={toggleTheme}>
      {theme === "light" ? <MoonIcon size={20} /> : <SunIcon size={20} />}
    </Button>
  );
};

export { ThemeToggle };
