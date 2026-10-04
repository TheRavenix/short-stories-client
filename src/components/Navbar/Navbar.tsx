import Link from "next/link";

import styles from "./Navbar.module.css";

import { NavbarLink } from "./NavbarLink";
import { NavbarDrawer } from "./NavbarDrawer";
import { P } from "../ui/Typography";
import { Container } from "../ui/Container";
import { NavbarSearch } from "./NavbarSearch";
import { NavbarAuthActions } from "./NavbarAuthActions";
import { ThemeToggle } from "../Theme/ThemeToggle";
import { navBarLinks } from "@/data/links";

export function Navbar() {
  return (
    <nav className={styles.nav} data-nav-fixed='true'>
      <Container className={styles.navContainer}>
        <div className={styles.startContent}>
          <NavbarDrawer />
          <Link href='/'>
            <P size='lg' weight='bold' className={styles.title}>
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
            <NavbarSearch />
            <ThemeToggle />
          </div>
          <NavbarAuthActions />
        </div>
      </Container>
    </nav>
  );
};
