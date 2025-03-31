"use client";

import { MoonIcon, SunIcon } from "lucide-react";

import { Button } from "../ui/Button";

import { useThemeStore } from "@/stores/theme";

interface Props {}

const ThemeToggle: React.FC<Props> = () => {
  const theme = useThemeStore((s) => s.theme);
  const toggleTheme = useThemeStore((s) => s.toggleTheme);

  return (
    <Button size="icon" onClick={toggleTheme}>
      {theme === "light" ? <MoonIcon size={20} /> : <SunIcon size={20} />}
    </Button>
  );
};

export { ThemeToggle };
