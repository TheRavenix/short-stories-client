import clsx from "clsx";

import styles from "./EmptyState.module.scss";

import { P } from "../ui/Typography";

type Props = {
  message?: string;
  icon?: React.ReactNode;
  position?: "start" | "center" | "end";
};

const EmptyState: React.FC<Props> = ({
  message = "No items found.",
  icon,
  position = "center",
}) => {
  return (
    <div className={clsx(styles.emptyState, styles[position])}>
      {icon && <div className={styles.icon}>{icon}</div>}
      <P size="xl" variant="gray">
        {message}
      </P>
    </div>
  );
};

export { EmptyState };
