"use client";

import styles from "./Navbar.module.scss";

import { ThemeSelect, ThemeToggle } from "../Theme";

import { useProfile } from "@/hooks/profile";

interface Props {}

const NavbarTheme: React.FC<Props> = () => {
  const { profile } = useProfile();
  return profile?.plan === "pro" ? (
    <div className={styles.themeSelectContainer}>
      <ThemeSelect />
    </div>
  ) : (
    <ThemeToggle />
  );
};

export { NavbarTheme };
