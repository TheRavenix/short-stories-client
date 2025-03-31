import Link from "next/link";

import styles from "./Navbar.module.scss";

import { ThemeToggle } from "../Theme";
import { NavbarLink } from "./NavbarLink";
import { NavbarDrawer } from "./NavbarDrawer";
import { P } from "../ui/Typography";
import { Container } from "../ui/Container";
import { NavbarSearch } from "./NavbarSearch";
import { NavbarAuthActions } from "./NavbarAuthActions";
import { NavbarSettingsLink } from "./NavbarSettingsLink";
import { NavbarDashboardLink } from "./NavbarDashboardLink";

import { navBarLinks } from "@/data/links";

interface Props {}

const Navbar: React.FC<Props> = () => {
  return (
    <nav className={styles.nav}>
      <Container className={styles.navContainer}>
        <div className={styles.startContent}>
          <NavbarDrawer />
          <Link href="/">
            <P size="lg" weight="bold" className={styles.title}>
              Short stories
            </P>
          </Link>
        </div>
        <div className={styles.endContent}>
          <div className={styles.links}>
            <NavbarDashboardLink />
            {navBarLinks.map((link, i) => (
              <NavbarLink key={i} href={link.href}>
                {link.name}
              </NavbarLink>
            ))}
            <NavbarSettingsLink />
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

export { Navbar, navBarLinks };
