import { ComponentProps } from "react";
import clsx from "clsx";

import styles from "./Button.module.scss";

type ButtonVariant = "primary" | "secondary" | "page" | "destructive";

type ButtonSize = "sm" | "md" | "lg" | "icon";

interface Props extends ComponentProps<"button"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  rounded?: boolean;
}

const Button: React.FC<Props> = ({
  className,
  variant = "primary",
  size = "md",
  rounded = true,
  ...rest
}) => {
  return (
    <button
      className={clsx(
        styles.button,
        styles[variant],
        styles[size],
        rounded && styles.rounded,
        className
      )}
      {...rest}
    />
  );
};

export { Button };
