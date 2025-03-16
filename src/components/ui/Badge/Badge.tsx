import { ComponentProps } from "react";
import clsx from "clsx";

import styles from "./Badge.module.scss";

type BadgeVariant = "primary" | "secondary" | "page" | "inverse";

type BadgeSize = "sm" | "md" | "lg";

interface Props extends ComponentProps<"div"> {
  vaiant?: BadgeVariant;
  size?: BadgeSize;
}

const Badge: React.FC<Props> = ({
  className,
  vaiant = "primary",
  size = "md",
  ...rest
}) => {
  return (
    <div
      className={clsx(styles.badge, styles[vaiant], styles[size], className)}
      {...rest}
    />
  );
};

export { Badge };
