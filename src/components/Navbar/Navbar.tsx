import Link from "next/link";
import { SearchIcon } from "lucide-react";

import styles from "./Navbar.module.scss";

import { ThemeToggle } from "../ThemeToggle";
import { NavbarLink } from "./NavbarLink";
import { Button } from "../ui/Button";
import { NavbarDrawer } from "./NavbarDrawer";
import { P } from "../ui/Typography";

import { authLinks, navBarLinks } from "@/data/links";
import { Container } from "../ui/Container";

interface Props {}

const Navbar: React.FC<Props> = () => {
  return (
    <nav className={styles.nav}>
      <Container className={styles.navContainer}>
        <div className={styles.startContent}>
          <NavbarDrawer />
          <Link href="/">
            <P size="lg" weight="bold">
              Short stories
            </P>
          </Link>
        </div>
        <div className={styles.endContent}>
          <div className={styles.links}>
            {navBarLinks.map((link, i) => (
              <NavbarLink key={i} href={link.href}>
                {link.name}
              </NavbarLink>
            ))}
          </div>
          <div className={styles.searchAndThemeContainer}>
            <Button variant="inverse" size="icon">
              <SearchIcon size={20} />
            </Button>
            <ThemeToggle />
          </div>
          <div className={styles.authContainer}>
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
        </div>
      </Container>
    </nav>
  );
};

export { Navbar, navBarLinks };
