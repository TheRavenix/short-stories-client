import { ComponentProps } from "react";
import clsx from "clsx";

import styles from "./Button.module.scss";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "page"
  | "inverse"
  | "ghost"
  | "destructive";

type ButtonSize = "sm" | "md" | "lg" | "icon" | "full" | "responsive";

type ButtonShape = "rounded" | "squared" | "circle";

interface Props extends ComponentProps<"button"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  shape?: ButtonShape;
}

const Button: React.FC<Props> = ({
  className,
  variant = "primary",
  size = "md",
  shape = "rounded",
  ...rest
}) => {
  return (
    <button
      className={clsx(
        styles.button,
        styles[variant],
        styles[size],
        styles[shape],
        className
      )}
      {...rest}
    />
  );
};

export { Button };
