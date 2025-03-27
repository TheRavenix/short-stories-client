"use client";

import Link from "next/link";

import styles from "./Navbar.module.scss";

import { Button } from "../ui/Button";

import { useAuthStore } from "@/stores/auth";
import { authLinks } from "@/data/links";

interface Props {}

const NavbarAuthActions: React.FC<Props> = () => {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);

  if (isAuthenticated) return null;

  return (
    <div className={styles.authActions}>
      {authLinks.map((link, i) => (
        <Link key={i} href={link.href}>
          <Button
            variant={link.href === "/sign-up" ? "inverse" : "primary"}
            size="sm"
          >
            {link.name}
          </Button>
        </Link>
      ))}
    </div>
  );
};

export { NavbarAuthActions };
