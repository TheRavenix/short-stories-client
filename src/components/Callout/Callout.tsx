import Link from "next/link";

import styles from "./Callout.module.css";

import { P } from "../ui/Typography";
import { Button } from "../ui/Button";

type Props = {
  message?: string
  href?: string
  buttonText?: string
}

export function Callout({
  message = 'Something went wrong!',
  href = '/',
  buttonText = 'Back Home'
}: Props) {
  return (
    <div className={styles.container}>
      <P size='xl'>{message}</P>
      <Link href={href}>
        <Button>{buttonText}</Button>
      </Link>
    </div>
  )
}
