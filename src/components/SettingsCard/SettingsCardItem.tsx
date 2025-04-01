import clsx from "clsx";

import styles from "./SettingsCard.module.scss";

import { P } from "../ui/Typography";

interface Props {
  direction?: "col" | "row";
  label: string;
  children: React.ReactNode;
}

const SettingsCardItem: React.FC<Props> = ({
  direction = "row",
  label,
  children,
}) => {
  return (
    <div
      className={clsx(
        styles.cardItem,
        direction === "row" ? styles.cardItemRow : styles.cardItemCol
      )}
    >
      <P>{label}</P>
      <div>{children}</div>
    </div>
  );
};

export { SettingsCardItem };
