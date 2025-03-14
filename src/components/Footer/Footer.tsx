import styles from "./Footer.module.scss";

import { Container } from "../ui/Container";

interface Props {}

const Footer: React.FC<Props> = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <p>Short stories {new Date().getFullYear()}</p>
      </Container>
    </footer>
  );
};

export { Footer };
