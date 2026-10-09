import { PropsWithChildren } from 'react'

import styles from './ActionSlot.module.css'

type Props = PropsWithChildren

export function ActionSlot({ children }: Props) {
  return <div className={styles.slot}>{children}</div>
}
