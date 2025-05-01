import { PropsWithChildren } from "react";

import styles from "./ActionSlot.module.scss";

interface Props extends PropsWithChildren {}

const ActionSlot: React.FC<Props> = ({ children }) => {
  return <div className={styles.slot}>{children}</div>;
};

export { ActionSlot };
