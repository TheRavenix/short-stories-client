import { JSX } from "react";

import styles from "./Stats.module.css";

import { Span } from "../ui/Typography";

type StatType = {
  id?: string
  icon: JSX.Element
  value: number
}

type Props = {
  list: StatType[]
}

export function Stats({ list }: Props) {
  return (
    <div className={styles.stats}>
      {list.map((stat, index) => (
        <div key={index} className={styles.stat}>
          <div className={styles.iconWrapper}>{stat.icon}</div>
          <Span weight="bold">{stat.value}</Span>
        </div>
      ))}
    </div>
  )
}
