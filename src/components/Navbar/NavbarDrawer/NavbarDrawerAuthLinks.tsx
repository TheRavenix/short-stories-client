import Link from "next/link";

import styles from "./NavbarDrawer.module.scss";

import { Button } from "@/components/ui/Button";

import { authLinks } from "@/data";
import { useAuthStore } from "@/stores";

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
