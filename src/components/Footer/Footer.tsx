import Link from "next/link";
import { InstagramIcon } from "lucide-react";

import styles from "./Footer.module.scss";

import { Container } from "../ui/Container";
import { H3, P } from "../ui/Typography";
import { NavbarLink } from "../Navbar";
import { Button } from "../ui/Button";

import { footerLinks } from "@/data/links";

interface Props {}

const Footer: React.FC<Props> = () => {
  return (
    <footer className={styles.footer}>
      <Container className={styles.footerContainer}>
        <div className={styles.footerLeftSection}>
          <Link href="/" className={styles.titleLink}>
            <H3>Short stories</H3>
          </Link>
          <P weight="semi-bold" variant="gray" transform="capitalize">
            All rights reserved 2025 ©
          </P>
        </div>
        <div>
          <div className={styles.links}>
            {footerLinks.map((link, i) => (
              <NavbarLink key={i} href={link.href}>
                {link.name}
              </NavbarLink>
            ))}
          </div>
        </div>
        <div className={styles.followLinks}>
          <a
            href="https://www.instagram.com"
            target="_blank"
            className={styles.followLink}
          >
            <Button size="icon" variant="secondary" shape="circle">
              <InstagramIcon size={18} />
            </Button>
          </a>
        </div>
      </Container>
    </footer>
  );
};

export { Footer };
