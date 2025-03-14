import styles from "./Navbar.module.scss";

import { ThemeToggle } from "../ThemeToggle";
import { Container } from "../ui/Container";

interface Props {}

const Navbar: React.FC<Props> = () => {
  return (
    <nav className={styles.nav}>
      <Container className={styles.container}>
        <h3>Short stories</h3>
        <ThemeToggle />
      </Container>
    </nav>
  );
};

export { Navbar };
