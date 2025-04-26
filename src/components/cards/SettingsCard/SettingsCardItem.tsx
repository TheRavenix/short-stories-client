import clsx from "clsx";

import styles from "./SettingsCard.module.scss";

import { Label } from "@/components/ui/Label";

interface Props {
  direction?: "col" | "row";
  label: string;
  labelHtmlFor?: string;
  children: React.ReactNode;
}

const SettingsCardItem: React.FC<Props> = ({
  direction = "row",
  label,
  labelHtmlFor,
  children,
}) => {
  return (
    <div
      className={clsx(
        styles.cardItem,
        direction === "row" ? styles.cardItemRow : styles.cardItemCol
      )}
    >
      <Label htmlFor={labelHtmlFor}>{label}</Label>
      <div>{children}</div>
    </div>
  );
};

export { SettingsCardItem };
