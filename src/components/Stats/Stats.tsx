import { JSX } from "react";

import styles from "./Stats.module.scss";

import { Span } from "../ui/Typography";

type StatType = {
  id?: string;
  icon: JSX.Element;
  value: number;
};

interface Props {
  list: StatType[];
}

const Stats: React.FC<Props> = ({ list }) => {
  return (
    <div className={styles.stats}>
      {list.map((stat, index) => (
        <div key={index} className={styles.stat}>
          <div className={styles.iconWrapper}>{stat.icon}</div>
          <Span weight="bold">{stat.value}</Span>
        </div>
      ))}
    </div>
  );
};

export { Stats };
