import clsx from "clsx";

import styles from "./EmptyState.module.css";

import { P } from "../ui/Typography";

type Props = {
  message?: string
  icon?: React.ReactNode
  position?: 'start' | 'center' | 'end'
}

export function EmptyState({
  message = 'No items found.',
  icon,
  position = 'center'
}: Props) {
  return (
    <div className={clsx(styles.emptyState, styles[position])}>
      {icon && <div className={styles.icon}>{icon}</div>}
      <P size='xl' variant='gray'>
        {message}
      </P>
    </div>
  )
}
