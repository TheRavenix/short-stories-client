"use client";

import styles from "./Navbar.module.scss";

import { ThemeSelect, ThemeToggle } from "../Theme";

import { useAuthStore } from "@/stores/auth";

interface Props {}

const NavbarTheme: React.FC<Props> = () => {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);

  return isAuthenticated ? (
    <div className={styles.themeSelectContainer}>
      <ThemeSelect />
    </div>
  ) : (
    <ThemeToggle />
  );
};

export { NavbarTheme };
