import Link from "next/link";

import styles from "./Navbar.module.scss";

import { Button } from "../ui/Button";

import { authLinks } from "@/data/links";
import { useAuthStore } from "@/stores/auth";

interface Props {
  toggleOpen: () => void;
}

const NavbarDrawerAuthLinks: React.FC<Props> = ({ toggleOpen }) => {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);

  if (isAuthenticated) return null;

  return (
    <div className={styles.drawerLinks}>
      {authLinks.map((link, i) => (
        <Link key={i} href={link.href} onClick={toggleOpen}>
          <Button
            variant={link.href === "/sign-up" ? "inverse" : "primary"}
            size="sm"
            className={styles.drawerButton}
          >
            {link.name}
          </Button>
        </Link>
      ))}
    </div>
  );
};

export { NavbarDrawerAuthLinks };
