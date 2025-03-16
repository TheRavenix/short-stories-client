import Link from "next/link";
import { SearchIcon } from "lucide-react";

import styles from "./Navbar.module.scss";

import { ThemeToggle } from "../ThemeToggle";
import { NavbarLink } from "./NavbarLink";
import { Button } from "../ui/Button";
import { NavbarDrawer } from "./NavbarDrawer";
import { P } from "../ui/Typography";

interface Props {}

const navBarLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Library",
    href: "/library",
  },
  {
    name: "Contact",
    href: "/contact",
  },
  {
    name: "About",
    href: "/about",
  },
];

const Navbar: React.FC<Props> = () => {
  return (
    <nav className={styles.nav}>
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
          <Link href="/sign-in">
            <Button size="sm">Sign in</Button>
          </Link>
          <Link href="/sign-up">
            <Button variant="inverse" size="sm">
              Sign up
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export { Navbar, navBarLinks };
