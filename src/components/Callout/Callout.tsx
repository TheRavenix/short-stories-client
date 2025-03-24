import Link from "next/link";

import styles from "./Callout.module.scss";

import { P } from "../ui/Typography";
import { Button } from "../ui/Button";

interface Props {
  message?: string;
  href?: string;
  buttonText?: string;
}

const Callout: React.FC<Props> = ({
  message = "Something went wrong!",
  href = "/",
  buttonText = "Back Home",
}) => {
  return (
    <div className={styles.container}>
      <P size="xl">{message}</P>
      <Link href={href}>
        <Button>{buttonText}</Button>
      </Link>
    </div>
  );
};

export { Callout };
